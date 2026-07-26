import Link from "next/link";
import { Calendar } from "lucide-react";
import type { Article } from "@/types";
interface ArticlesGridProps {
    articles: Article[];
}
export default function ArticlesGrid({ articles }: ArticlesGridProps) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
                <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                    <div className="flex aspect-video items-center justify-center border-b border-slate-200 bg-blue-50 p-4 text-center font-mono text-sm text-slate-500">
                        [ تصویر مقاله ]
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                        <span className="text-sm font-bold text-blue-700">{a.cat}</span>
                        <h3 className="m-0 text-xl">{a.title}</h3>
                        <p className="m-0 flex-1 text-sm text-slate-500">{a.excerpt}</p>
                        <div className="flex items-center gap-2 border-t border-slate-200 pt-3 text-sm text-slate-500">
                            <Calendar className="size-4" />
                            {a.date}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
