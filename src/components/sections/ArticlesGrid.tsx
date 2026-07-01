import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { Article } from "@/types";

interface ArticlesGridProps {
  articles: Article[];
}

export default function ArticlesGrid({ articles }: ArticlesGridProps) {
  return (
    <div className="grid grid-3">
      {articles.map((a) => (
        <Link key={a.slug} href={`/blog/${a.slug}`} className="card article-card">
          <div className="ph thumb">[ تصویر مقاله ]</div>
          <div className="body">
            <span className="cat">{a.cat}</span>
            <h3>{a.title}</h3>
            <p className="excerpt">{a.excerpt}</p>
            <div className="meta">
              <span>
                <Calendar />
                {a.date}
              </span>
              <span>
                <Clock />
                {a.read}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
