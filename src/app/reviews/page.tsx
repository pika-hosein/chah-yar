import type { Metadata } from "next";
import { Star } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ReviewsGrid from "@/components/sections/ReviewsGrid";
import ReviewForm from "@/components/forms/ReviewForm";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "نظرات مشتریان",
  description: "تجربه‌ی واقعی کسانی که از خدمات چاه‌یار استفاده کرده‌اند.",
};

export default function ReviewsPage() {
  return (
    <div className="flex flex-col flex-1">
      <PageHero
        crumbs={[{ label: "خانه", href: "/" }, { label: "نظرات مشتریان" }]}
        title="نظرات مشتریان"
        description="تجربه‌ی واقعی کسانی که از خدمات چاه‌یار استفاده کرده‌اند."
      />

      <section className="section-tight">
        <div className="container">
          <div
            className="card"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 30,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 54, fontWeight: 800, color: "var(--brand)", lineHeight: 1 }}>
                  ۴.۹
                </div>
                <div className="stars" style={{ justifyContent: "center", marginTop: 6 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} fill="currentColor" />
                  ))}
                </div>
              </div>
              <div>
                <b style={{ fontSize: 19 }}>رضایت عالی مشتریان</b>
                <p className="muted" style={{ margin: "4px 0 0" }}>
                  بر اساس بیش از ۱٬۸۰۰ نظر ثبت‌شده
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 26, fontWeight: 800 }}>۹۸٪</div>
                <div className="muted" style={{ fontSize: 14 }}>
                  پیشنهاد به دیگران
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 26, fontWeight: 800 }}>+۱۲هزار</div>
                <div className="muted" style={{ fontSize: 14 }}>
                  پروژه‌ی انجام‌شده
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 26, fontWeight: 800 }}>۳۰دقیقه</div>
                <div className="muted" style={{ fontSize: 14 }}>
                  میانگین اعزام
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <ReviewsGrid reviews={reviews} />
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="section-head center">
            <h2 style={{ fontSize: 28 }}>تجربه‌ی خود را ثبت کنید</h2>
            <p>نظر شما به دیگران در انتخاب بهتر کمک می‌کند.</p>
          </div>
          <div style={{ marginTop: 28 }}>
            <ReviewForm />
          </div>
        </div>
      </section>
    </div>
  );
}
