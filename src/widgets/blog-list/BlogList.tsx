"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/entities/blog/model/types";
import { BlogCard } from "@/entities/blog/ui/BlogCard";

interface BlogListProps {
  posts: BlogPost[];
  tags: string[];
}

export const BlogList = ({ posts, tags }: BlogListProps) => {
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchTag = activeTag === "All" || p.tags.includes(activeTag);
      const matchSearch =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.summary.toLowerCase().includes(search.toLowerCase());
      return matchTag && matchSearch;
    });
  }, [posts, activeTag, search]);

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-900/60 border border-gray-800 rounded-xl 
                     pl-11 pr-4 py-3 text-sm text-white placeholder:text-gray-600 
                     outline-none focus:border-purple-700 focus:ring-2 
                     focus:ring-purple-500/20 transition-all"
        />
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2">
        {["All", ...tags].map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200
              ${activeTag === tag
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : ":bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 blog-filter-btn"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-600">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-sm">No articles found.</p>
        </div>
      )}
    </div>
  );
};