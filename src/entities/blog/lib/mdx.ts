import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { BlogPost, BlogPostWithContent } from "../model/types";

const POSTS_DIR = path.join(process.cwd(), "src/app/blog/content/blog");

export const getAllPosts = (): BlogPost[] => {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      const slug = file.replace(".mdx", "");

      return {
        slug,
        title: data.title ?? "Untitled",
        summary: data.summary ?? "",
        date: data.date ?? "",
        readingTime: readingTime(content).text,
        tags: data.tags ?? [],
        cover: data.cover ?? null,
        published: data.published ?? true,
      } as BlogPost;
    })
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): BlogPostWithContent | null => {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "Untitled",
    summary: data.summary ?? "",
    date: data.date ?? "",
    readingTime: readingTime(content).text,
    tags: data.tags ?? [],
    cover: data.cover ?? null,
    published: data.published ?? true,
    content,
  };
};

export const getAllTags = (): string[] => {
  const posts = getAllPosts();
  const tags = posts.flatMap((p) => p.tags);
  return [...new Set(tags)];
};