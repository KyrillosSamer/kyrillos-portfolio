"use client";

import { useState, useMemo } from "react";
import { projects } from "@/entities/project/data/projects.data";
import { ProjectCard } from "@/entities/project/ui/ProjectCard";
import { ProjectFilter } from "@/features/project-filter/ProjectFilter";

export const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => [...new Set(projects.map((p) => p.category ?? "Other"))],
    []
  );

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          My Work
        </h2>

        <ProjectFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};