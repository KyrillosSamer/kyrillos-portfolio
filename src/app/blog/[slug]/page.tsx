import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

import { getAllPosts, getPostBySlug } from "@/entities/blog/lib/mdx";


interface Props {
  params: { slug: string };
}

/* -----------------------------
   Static params (SSG)
------------------------------*/
export async function generateStaticParams() {
  return getAllPosts().map((p) => ({
    slug: p.slug,
  }));
}

/* -----------------------------
   SEO Metadata
------------------------------*/
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${post.title} | Kyrillos Samer`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

/* -----------------------------
   MDX Components
------------------------------*/
const mdxComponents = {
  h2: (props: any) => (
    <h2 className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-gray-800" {...props} />
  ),

  h3: (props: any) => (
    <h3 className="text-xl font-semibold text-white mt-8 mb-3" {...props} />
  ),

  p: (props: any) => (
    <p className="text-gray-400 leading-relaxed mb-5" {...props} />
  ),

  a: (props: any) => (
    <a
      className="text-purple-400 underline underline-offset-4 decoration-purple-400/40 hover:decoration-purple-400 transition-all"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),

  code: (props: any) => (
    <code className="font-mono text-sm text-cyan-400 bg-cyan-950/30 border border-cyan-900/40 px-1.5 py-0.5 rounded" {...props} />
  ),

  pre: (props: any) => (
    <pre className="bg-gray-950 border border-gray-800 rounded-xl p-5 overflow-x-auto my-6 text-sm font-mono" {...props} />
  ),

  blockquote: (props: any) => (
    <blockquote className="border-l-2 border-purple-600 pl-5 my-6 text-gray-400 italic" {...props} />
  ),

  ul: (props: any) => (
    <ul className="list-none space-y-2 mb-5" {...props} />
  ),

  li: (props: any) => (
    <li className="flex gap-2 text-gray-400 text-sm leading-relaxed">
      <span className="text-purple-500 mt-0.5 shrink-0">›</span>
      <span>{props.children}</span>
    </li>
  ),

  hr: () => <hr className="border-gray-800 my-10" />,

  strong: (props: any) => (
    <strong className="text-white font-semibold" {...props} />
  ),
};

/* -----------------------------
   Page
------------------------------*/
export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
  <article className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        {post.title}
      </h1>

      {/* Summary */}
      <p className="text-gray-400 mb-10">
        {post.summary}
      </p>

      {/* MDX CONTENT */}
      <div className="prose-custom">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
        />
      </div>

    </div>
  </article>
);
}