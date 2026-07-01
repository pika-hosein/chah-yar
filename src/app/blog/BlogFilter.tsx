"use client";

import { useState } from "react";
import ArticlesGrid from "@/components/sections/ArticlesGrid";
import type { Article } from "@/types";

interface BlogFilterProps {
  articles: Article[];
}

export default function BlogFilter({ articles }: BlogFilterProps) {
  const categories = ["همه", ...new Set(articles.map((a) => a.cat))];
  const [active, setActive] = useState("همه");

  const list = active === "همه" ? articles : articles.filter((a) => a.cat === active);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 34 }}>
        {categories.map((c) => (
          <button
            key={c}
            className={`btn ${c === active ? "btn-primary" : "btn-ghost"}`}
            style={{ fontSize: 14, padding: "9px 18px" }}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <ArticlesGrid articles={list} />
    </>
  );
}
