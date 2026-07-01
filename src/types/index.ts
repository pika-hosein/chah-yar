import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  short: string;
  price: string;
}

export interface Review {
  name: string;
  meta: string;
  stars: number;
  text: string;
}

export interface ArticleBlock {
  type: "p" | "h2" | "h3" | "ul" | "blockquote" | "callout";
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  body: ArticleBlock[];
}
