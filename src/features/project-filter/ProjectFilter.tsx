"use client";

interface ProjectFilterProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export const ProjectFilter = ({
  categories,
  active,
  onChange,
}: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
            ${
              active === cat
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};