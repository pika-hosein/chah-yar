import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import { articles } from "@/data/articles";
import BlogFilter from "./BlogFilter";

export const metadata: Metadata = {
  title: "مقالات | راهنماها و نکات تخلیه چاه",
  description: "نکات کاربردی درباره‌ی تخلیه چاه، لوله‌بازکنی، نگهداری فاضلاب و هزینه‌ها.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col flex-1">
      <PageHero
        crumbs={[{ label: "خانه", href: "/" }, { label: "مقالات" }]}
        title="مقالات و راهنماها"
        description="نکات کاربردی درباره‌ی تخلیه چاه، لوله‌بازکنی، نگهداری فاضلاب و هزینه‌ها."
      />

      <section className="section">
        <div className="container">
          <BlogFilter articles={articles} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBand
            title="سؤالی دارید که جوابش را پیدا نکردید؟"
            description="کارشناسان ما رایگان راهنمایی‌تان می‌کنند."
          />
        </div>
      </section>
    </div>
  );
}
