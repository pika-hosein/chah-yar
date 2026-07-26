"use client";

import { useState } from "react";
import ArticlesGrid from "@/components/sections/ArticlesGrid";
import type { Article } from "@/types";

interface BlogFilterProps {
    articles: Article[];
}

export default function BlogFilter({ articles }: BlogFilterProps) {
    const all = "همه";
    const categories = [all, ...new Set(articles.map((article) => article.cat))];
    const [active, setActive] = useState(all);
    const list =
        active === all
            ? articles
            : articles.filter((article) => article.cat === active);
    return (
        <>
            <div className="mb-8 flex flex-wrap gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={
                            category === active
                                ? "rounded-full bg-blue-700 px-5 py-2 text-sm font-bold text-white shadow-md"
                                : "rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-bold text-blue-700 transition hover:border-blue-700 hover:bg-blue-50"
                        }
                        onClick={() => setActive(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <ArticlesGrid articles={list} />
        </>
    );
}
