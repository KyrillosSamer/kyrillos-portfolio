export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  repo: string;
  tags?: string[];
  category?: string;
}