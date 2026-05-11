import { HeroSection } from "@/widgets/hero-section/HeroSection";
import { AboutPreview } from "@/widgets/about-preview/AboutPreview";
import { ProjectsGrid } from "@/widgets/projects-grid/ProjectsGrid";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProjectsGrid />
    </>
  );
}