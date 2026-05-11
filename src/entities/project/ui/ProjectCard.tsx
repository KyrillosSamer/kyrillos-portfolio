import Image from "next/image";
import { Project } from "../model/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const tags = project.tags ?? [];

  return (
    <div
      className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl 
                 transition-all duration-300 border border-gray-800 flex flex-col 
                 scale-95 hover:scale-100"
    >
      {/* Image */}
      <div className="relative overflow-hidden group h-40 sm:h-44 md:h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-400 mb-3 flex-grow line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-gray-800 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 
                         hover:to-blue-700 text-white font-medium py-2 px-4 rounded-md 
                         text-center transition-all duration-300 text-xs sm:text-sm flex-1"
            >
              View
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 
                         rounded-md text-center transition-all duration-300 text-xs sm:text-sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};