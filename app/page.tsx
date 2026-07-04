import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
// import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedWorks />
      {/* <Services /> */}
      <Contact />
    </>
  );
}
