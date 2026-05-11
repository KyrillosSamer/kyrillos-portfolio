export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  tags: string[];
  cover?: string;
  published: boolean;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}