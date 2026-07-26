import type { Metadata } from "next";
import BlogFilter from "./BlogFilter";
import CtaBand from "@/components/sections/CtaBand";
import PageHero from "@/components/sections/PageHero";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
    title: "مقالات | راهنماها و نکات تخلیه چاه",
    description:
        "نکات کاربردی دربارهٔ تخلیه چاه، لوله‌بازکنی، نگهداری فاضلاب و هزینه‌ها.",
};

export default function BlogPage() {
    return (
        <main className="flex flex-1 flex-col">
            <PageHero
                crumbs={[{ label: "خانه", href: "/" }, { label: "مقالات" }]}
                title="مقالات و راهنماها"
                description="نکات کاربردی دربارهٔ تخلیه چاه، لوله‌بازکنی، نگهداری فاضلاب و هزینه‌ها."
            />
            <section className="py-12 md:py-20">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <BlogFilter articles={articles} />
                </div>
            </section>
            <section className="pb-12 md:pb-20">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <CtaBand
                        title="سؤالی دارید که جوابش را پیدا نکردید؟"
                        description="کارشناسان ما رایگان راهنمایی‌تان می‌کنند."
                    />
                </div>
            </section>
        </main>
    );
}
