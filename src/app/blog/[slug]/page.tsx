import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ChevronLeft, Clock, Lightbulb, User } from "lucide-react";
import { notFound } from "next/navigation";
import ArticlesGrid from "@/components/sections/ArticlesGrid";
import CtaBand from "@/components/sections/CtaBand";
import { articles } from "@/data/articles";
import type { ArticleBlock } from "@/types";

interface PageParams {
    params: Promise<{ slug: string }>;
}
export function generateStaticParams() {
    return articles.map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({
    params,
}: PageParams): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((item) => item.slug === slug);
    return article ? { title: article.title, description: article.excerpt } : {};
}
function splitLabel(text: string): [string | null, string] {
    const index = text.indexOf(":");
    return index === -1
        ? [null, text]
        : [text.slice(0, index + 1), text.slice(index + 1)];
}
function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
    return (
        <article className="mx-auto max-w-3xl text-slate-700">
            <>
                {blocks.map((block, index) => {
                    if (block.type === "p")
                        return (
                            <p key={index} className="text-lg">
                                {block.text}
                            </p>
                        );
                    if (block.type === "h2")
                        return (
                            <h2 key={index} className="mt-10 text-3xl">
                                {block.text}
                            </h2>
                        );
                    if (block.type === "h3")
                        return (
                            <h3 key={index} className="mt-8 text-2xl">
                                {block.text}
                            </h3>
                        );
                    if (block.type === "blockquote")
                        return (
                            <blockquote
                                key={index}
                                className="my-6 rounded-l-2xl border-r-4 border-blue-700 bg-slate-50 p-5 font-semibold text-slate-800"
                            >
                                {block.text}
                            </blockquote>
                        );
                    if (block.type === "ul")
                        return (
                            <ul key={index} className="list-disc space-y-2 pr-6">
                                {block.items?.map((item) => {
                                    const [label, rest] = splitLabel(item);
                                    return (
                                        <li key={item} className="mb-2">
                                            {label && <b>{label}</b>}
                                            {rest}
                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    if (block.type === "callout") {
                        const [label, rest] = splitLabel(block.text ?? "");
                        return (
                            <div
                                key={index}
                                className="my-6 flex gap-3 rounded-2xl bg-blue-50 p-5"
                            >
                                <Lightbulb className="size-6 shrink-0 text-blue-700" />
                                <p className="m-0 text-base">
                                    {label && <b>{label}</b>}
                                    {rest}
                                </p>
                            </div>
                        );
                    }
                    return null;
                })}
            </>
        </article>
    );
}
export default async function ArticlePage({ params }: PageParams) {
    const { slug } = await params;
    const article = articles.find((item) => item.slug === slug);
    if (!article) notFound();
    const related = articles
        .filter((item) => item.slug !== article.slug)
        .slice(0, 3);
    return (
        <main className="flex flex-1 flex-col">
            <section className="border-b border-slate-200 bg-slate-50 py-10 md:py-16">
                <div className="mx-auto w-full max-w-3xl px-5">
                    <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                        <Link href="/" className="hover:text-blue-700">
                            خانه
                        </Link>
                        <ChevronLeft className="size-4" />
                        <Link href="/blog" className="hover:text-blue-700">
                            مقالات
                        </Link>
                        <ChevronLeft className="size-4" />
                        <span>{article.title}</span>
                    </div>
                    <span className="text-sm font-bold text-blue-700">{article.cat}</span>
                    <h1 className="mt-2 text-3xl md:text-5xl">{article.title}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-2">
                            <User className="size-4" />
                            تیم کارشناسی چاه‌یار
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <Calendar className="size-4" />
                            {article.date}
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <Clock className="size-4" />
                            {article.read}
                        </span>
                    </div>
                </div>
            </section>
            <section className="py-12 md:py-20">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <div className="mx-auto mb-9 flex aspect-video max-w-3xl items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-blue-50 p-6 text-center font-mono text-sm text-slate-500">
                        [ تصویر شاخص مقاله: {article.title} ]
                    </div>
                    <ArticleBody blocks={article.body} />
                    <div className="mx-auto mt-10 max-w-3xl">
                        <CtaBand
                            title="نیاز به تخلیه یا شست‌وشوی چاه دارید؟"
                            description="همین حالا تماس بگیرید — مشاوره و بازدید رایگان است."
                        />
                    </div>
                </div>
            </section>
            {related.length > 0 && (
                <section className="bg-slate-50 py-12 md:py-16">
                    <div className="mx-auto w-full max-w-6xl px-5">
                        <h2 className="text-3xl">مقالات مرتبط</h2>
                        <div className="mt-7">
                            <ArticlesGrid articles={related} />
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
