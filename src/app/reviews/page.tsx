import type { Metadata } from "next";
import { Star } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import LiveReviewsGrid from "@/components/sections/LiveReviewsGrid";
import ReviewForm from "@/components/forms/ReviewForm";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "نظرات مشتریان",
  description: "تجربهٔ واقعی کسانی که از خدمات چاه‌یار استفاده کرده‌اند.",
};

export default function ReviewsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        crumbs={[{ label: "خانه", href: "/" }, { label: "نظرات مشتریان" }]}
        title="نظرات مشتریان"
        description="تجربهٔ واقعی کسانی که از خدمات چاه‌یار استفاده کرده‌اند."
      />

      <section className="py-10 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:flex-row md:p-8">
            <div className="flex items-center gap-5">
              <div className="text-center">
                <div className="text-5xl font-extrabold leading-none text-blue-700">
                  ۴.۹
                </div>
                <div className="mt-2 flex justify-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
              </div>
              <div>
                <b className="text-lg">رضایت عالی مشتریان</b>
                <p className="mt-1 mb-0 text-slate-500">
                  بر اساس بیش از ۱٬۸۰۰ نظر ثبت‌شده
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-7 text-center">
              <div>
                <div className="text-2xl font-extrabold">۹۸٪</div>
                <div className="text-sm text-slate-500">پیشنهاد به دیگران</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold">+۱۲هزار</div>
                <div className="text-sm text-slate-500">پروژهٔ انجام‌شده</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold">۳۰ دقیقه</div>
                <div className="text-sm text-slate-500">میانگین اعزام</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <LiveReviewsGrid fallbackReviews={reviews} />
        </div>
      </section>

      <section className="bg-slate-50 py-12 md:py-20">
        <div className="mx-auto w-full max-w-2xl px-5">
          <div className="text-center">
            <h2 className="mb-3 text-3xl">تجربهٔ خود را ثبت کنید</h2>
            <p className="m-0 text-slate-500">
              نظر شما به دیگران در انتخاب بهتر کمک می‌کند.
            </p>
          </div>
          <div className="mt-7">
            <ReviewForm />
          </div>
        </div>
      </section>
    </main>
  );
}
