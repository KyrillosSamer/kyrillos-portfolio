import Link from "next/link";
import { BlogPost } from "../model/types";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-gray-900/60 border border-gray-800 hover:border-gray-700 
                 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 
                 hover:shadow-lg hover:shadow-purple-500/5"
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2.5 py-0.5 rounded-full border border-purple-800 
                       text-purple-400 bg-purple-950/40"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 
                     transition-colors duration-200 leading-snug mb-2">
        {post.title}
      </h3>

      {/* Summary */}
      <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">
        {post.summary}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-600">
        <span>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {post.readingTime}
        </span>
      </div>
    </Link>
  );
};