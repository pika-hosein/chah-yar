import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, User, Calendar, Clock, Lightbulb } from "lucide-react";
import ArticlesGrid from "@/components/sections/ArticlesGrid";
import CtaBand from "@/components/sections/CtaBand";
import { articles } from "@/data/articles";
import type { ArticleBlock } from "@/types";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

function splitLabel(text: string): [string | null, string] {
  const idx = text.indexOf(":");
  if (idx === -1) return [null, text];
  return [text.slice(0, idx + 1), text.slice(idx + 1)];
}

function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <article className="prose">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i}>{block.text}</p>;
          case "h2":
            return <h2 key={i}>{block.text}</h2>;
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "blockquote":
            return <blockquote key={i}>{block.text}</blockquote>;
          case "ul":
            return (
              <ul key={i}>
                {block.items?.map((item) => {
                  const [label, rest] = splitLabel(item);
                  return (
                    <li key={item}>
                      {label && <b>{label}</b>}
                      {rest}
                    </li>
                  );
                })}
              </ul>
            );
          case "callout": {
            const [label, rest] = splitLabel(block.text ?? "");
            return (
              <div key={i} className="callout">
                <Lightbulb />
                <p>
                  {label && <b>{label}</b>}
                  {rest}
                </p>
              </div>
            );
          }
          default:
            return null;
        }
      })}
    </article>
  );
}

export default async function ArticlePage({ params }: PageParams) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="flex flex-col flex-1">
      <section className="page-hero">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="crumb">
            <Link href="/">خانه</Link>
            <ChevronLeft />
            <Link href="/blog">مقالات</Link>
            <ChevronLeft />
            <span>{article.title}</span>
          </div>
          <span className="cat" style={{ color: "var(--brand)", fontWeight: 700 }}>
            {article.cat}
          </span>
          <h1 style={{ marginTop: 8 }}>{article.title}</h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              marginTop: 16,
              color: "var(--muted)",
              fontSize: 14.5,
            }}
          >
            <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
              <User style={{ width: 16 }} /> تیم کارشناسی چاه‌یار
            </span>
            <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
              <Calendar style={{ width: 16 }} /> {article.date}
            </span>
            <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
              <Clock style={{ width: 16 }} /> {article.read}
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ph prose" style={{ aspectRatio: "16/7", marginBottom: 36 }}>
            [ تصویر شاخص مقاله: {article.title} ]
          </div>

          <ArticleBody blocks={article.body} />

          <div className="prose" style={{ marginTop: 40 }}>
            <CtaBand
              title="نیاز به تخلیه یا شستشوی چاه دارید؟"
              description="همین حالا تماس بگیرید — مشاوره و بازدید رایگان است."
            />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section
          className="section"
          style={{ background: "var(--surface)", paddingTop: "clamp(36px,5vw,64px)" }}
        >
          <div className="container">
            <div className="section-head">
              <h2 style={{ fontSize: 26 }}>مقالات مرتبط</h2>
            </div>
            <div style={{ marginTop: 28 }}>
              <ArticlesGrid articles={related} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
