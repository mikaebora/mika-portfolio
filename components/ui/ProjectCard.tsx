"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1;
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [vimeoThumbnail, setVimeoThumbnail] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const getYoutubeId = (url?: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getVimeoId = (url?: string) => {
    if (!url) return null;
    const regExp = /^.*(vimeo\.com\/)(video\/)?([0-9]+).*/;
    const match = url.match(regExp);
    return match ? match[3] : null;
  };

  const getGdriveId = (url?: string) => {
    if (!url) return null;
    // Matches: drive.google.com/file/d/ID/... or docs.google.com/uc?...&id=ID
    const fileMatch = url.match(/drive\.google\.com\/file\/d\/([^/&?]+)/);
    if (fileMatch) return fileMatch[1];
    const ucMatch = url.match(/[?&]id=([^&]+)/);
    if (ucMatch && url.includes('google.com')) return ucMatch[1];
    return null;
  };

  const youtubeId = getYoutubeId(project.video);
  const vimeoId = getVimeoId(project.video);
  const gdriveId = getGdriveId(project.video);
  const hasVideo = !!project.video;

  // Control video play/pause on hover for local videos
  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch((err) => console.log("Play failed:", err));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  // Fetch Vimeo thumbnail dynamically if needed
  useEffect(() => {
    if (vimeoId) {
      fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`)
        .then((res) => res.json())
        .then((data) => {
          setVimeoThumbnail(data.thumbnail_url);
        })
        .catch((err) => console.log("Failed to fetch Vimeo thumbnail:", err));
    }
  }, [vimeoId]);

  return (
    <>
      <motion.div
        className={`group glass-panel liquid-border neon-hover relative mx-auto w-full max-w-[280px] overflow-hidden rounded-3xl p-2.5 transition-all duration-500 hover:brightness-[1.03] ${project.video ? "cursor-pointer" : ""
          }`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={project.video ? { scale: 1.04 } : { scale: 1.01 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => project.video && setIsPlayerOpen(true)}
        transition={{
          scale: { type: "spring", stiffness: 220, damping: 24 },
          default: { duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }
        }}
      >
        {hasVideo ? (
          <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black">
            {isHovered ? (
              youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&rel=0&playsinline=1&showinfo=0&iv_load_policy=3`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="absolute inset-0 h-full w-full border-0 pointer-events-none transition-all duration-500 group-hover:scale-105"
                />
              ) : vimeoId ? (
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}?controls=0&autoplay=1&muted=1&loop=1&autopause=0&playsinline=1`}
                  allow="autoplay; fullscreen"
                  className="absolute inset-0 h-full w-full border-0 pointer-events-none scale-[1.35] transition-all duration-500 group-hover:scale-[1.4]"
                />
              ) : gdriveId ? (
                <iframe
                  src={`https://drive.google.com/file/d/${gdriveId}/preview`}
                  allow="autoplay"
                  className="absolute inset-0 h-full w-full border-0 pointer-events-none scale-[1.35] transition-all duration-500 group-hover:scale-[1.4]"
                />
              ) : (
                <video
                  ref={videoRef}
                  src={project.video}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              )
            ) : (
              // When not hovered
              project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : youtubeId ? (
                // Show YouTube Thumbnail image — maxres with SD fallback
                <img
                  src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/sddefault.jpg`;
                  }}
                />
              ) : vimeoId ? (
                // Show Vimeo Thumbnail image
                vimeoThumbnail ? (
                  <img
                    src={vimeoThumbnail}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                )
              ) : gdriveId ? (
                // Google Drive thumbnail via Drive's thumbnail API
                <img
                  src={`https://drive.google.com/thumbnail?id=${gdriveId}&sz=w400`}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                // For direct video files (like Dropbox), render the video tag paused.
                <video
                  ref={videoRef}
                  src={project.video}
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              )
            )}

            {/* Centered play icon on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan/40 bg-black/40 shadow-[0_0_30px_rgba(34,211,238,0.25)] backdrop-blur-md scale-90 group-hover:scale-100 transition-transform duration-300">
                <svg
                  className="ml-1 h-6 w-6 text-white/90"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute left-5 top-5 z-10">
              <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-xl">
                {project.category}
              </span>
            </div>
          </div>
        ) : (
          <div
            className={`relative aspect-[9/16] overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_20%,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_74%_72%,rgba(34,211,238,0.2),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.16),transparent_28%,rgba(255,255,255,0.05)_58%,transparent_76%)]" />
            <motion.div
              className="absolute -left-16 top-10 h-44 w-64 rounded-[45%] bg-cyan/20 blur-3xl"
              animate={{ x: [0, 24, 0], y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-20 bottom-0 h-52 w-72 rounded-[42%] bg-violet/20 blur-3xl"
              animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-x-5 bottom-5 top-5 rounded-[1.35rem] border border-white/10 bg-black/20 backdrop-blur-sm" />
            <div className="absolute left-7 top-7">
              <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-xl">
                {project.category}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan/35 bg-black/35 shadow-[0_0_42px_rgba(34,211,238,0.18)] backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:border-cyan/60">
                <svg
                  className="ml-1 h-8 w-8 text-white/85"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {project.video && isPlayerOpen && mounted && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setIsPlayerOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsPlayerOpen(false)}
            className="absolute right-4 top-4 z-[10000] rounded-full border border-white/10 bg-white/[0.05] p-3 text-white/80 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.1] hover:text-white hover:scale-105 sm:right-6 sm:top-6"
            aria-label="Close video player"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="glass-panel liquid-border relative max-h-[85vh] max-w-[90vw] w-[400px] aspect-[9/16] overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan/15"
            onClick={(e) => e.stopPropagation()}
          >
            {youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0 rounded-2xl bg-black"
              />
            ) : vimeoId ? (
              <iframe
                src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=0`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0 rounded-2xl bg-black"
              />
            ) : gdriveId ? (
              <iframe
                src={`https://drive.google.com/file/d/${gdriveId}/preview`}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="h-full w-full border-0 rounded-2xl bg-black"
              />
            ) : (
              <video
                src={project.video}
                controls
                autoPlay
                className="h-full w-full object-contain bg-black"
              />
            )}
          </motion.div>
        </motion.div>,
        document.body
      )}
    </>
  );
}
