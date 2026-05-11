import { getAllPosts, getAllTags } from "@/entities/blog/lib/mdx";
import { BlogList } from "@/widgets/blog-list/BlogList";

export const metadata = {
  title: "Blog | Kyrillos Samer",
  description: "Articles on Front-End development, GIS, and software architecture.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <section className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Blog
            </span>
          </h1>
          <p className="text-gray-400 text-sm">
            Thoughts on Front-End, GIS, Clean Architecture, and everything in between.
          </p>
        </div>

        <BlogList posts={posts} tags={tags} />
      </div>
    </section>
  );
}