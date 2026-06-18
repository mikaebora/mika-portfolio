"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

const PROJECTS_PER_BATCH = 3;

export default function FeaturedWorks() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_BATCH);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount((currentCount) =>
      Math.min(currentCount + PROJECTS_PER_BATCH, projects.length),
    );
  };

  return (
    <Section id="work" className="border-t border-white/10">
      <SectionHeading
        label="Featured Works"
        title="Selected projects"
        description="A showcase of recent edits spanning short-form social content, motion graphics, and brand storytelling."
      />

      <div className="grid gap-16 md:gap-20 lg:gap-24">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {hasMoreProjects && (
        <motion.div
          className="mt-14 flex justify-center md:mt-16"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            onClick={handleLoadMore}
            className="rounded-full border border-cyan/30 bg-cyan/10 px-6 py-3 text-sm font-medium text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-cyan/60 hover:bg-cyan/15 hover:shadow-[0_0_34px_rgba(34,211,238,0.18)]"
          >
            Load More Projects
          </button>
        </motion.div>
      )}
    </Section>
  );
}
