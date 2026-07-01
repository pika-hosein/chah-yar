import Link from "next/link";
import {
  Wrench,
  ArrowLeft,
  Route,
  ThumbsUp,
  Clock,
  ShieldCheck,
  Wallet,
  MessageSquareQuote,
  Star,
  BookOpen,
} from "lucide-react";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ReviewsGrid from "@/components/sections/ReviewsGrid";
import ArticlesGrid from "@/components/sections/ArticlesGrid";
import StatsSection from "@/components/sections/StatsSection";
import CtaBand from "@/components/sections/CtaBand";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { articles } from "@/data/articles";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      <TrustBar />
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">
              <Wrench /> خدمات ما
            </span>
            <h2>هر مشکلی در چاه و فاضلاب دارید، حل می‌کنیم</h2>
            <p>از تخلیه چاه فاضلاب تا تشخیص ترکیدگی لوله — همه با یک تماس.</p>
          </div>
          <div style={{ marginTop: 40 }}>
            <ServicesGrid services={services.slice(0, 6)} variant="preview" />
          </div>
          <div className="center" style={{ marginTop: 32 }}>
            <Link href="/services" className="btn btn-primary">
              <ArrowLeft /> مشاهده همه خدمات
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">
              <Route /> چطور کار می‌کنیم
            </span>
            <h2>فقط در ۳ قدم ساده</h2>
          </div>
          <div className="grid grid-3 steps" style={{ marginTop: 40 }}>
            <div className="step card">
              <div className="n">۱</div>
              <h3>تماس می‌گیرید</h3>
              <p>با شماره ما تماس بگیرید یا فرم درخواست را پر کنید. مشاوره و بازدید رایگان است.</p>
            </div>
            <div className="step card">
              <div className="n">۲</div>
              <h3>کارشناس اعزام می‌شود</h3>
              <p>نزدیک‌ترین اکیپ با تجهیزات کامل، در کوتاه‌ترین زمان به محل شما می‌رسد.</p>
            </div>
            <div className="step card">
              <div className="n">۳</div>
              <h3>کار با گارانتی تحویل</h3>
              <p>پس از انجام کامل کار و تأیید شما، هزینه پرداخت می‌شود — همراه با گارانتی کتبی.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: 50 }}>
            <div className="ph" style={{ aspectRatio: "4/3" }}>
              [ تصویر: تجهیزات و ماشین‌آلات تخصصی ]
            </div>
            <div>
              <span className="eyebrow">
                <ThumbsUp /> چرا چاه‌یار؟
              </span>
              <h2 style={{ fontSize: "clamp(24px,3.2vw,36px)" }}>
                انتخاب مطمئن هزاران خانواده و کسب‌وکار
              </h2>
              <div className="grid" style={{ gap: 16, marginTop: 20 }}>
                <div style={{ display: "flex", gap: 14 }}>
                  <span className="logo-mark" style={{ flexShrink: 0 }}>
                    <Clock />
                  </span>
                  <div>
                    <b>در دسترس در هر ساعت شبانه‌روز</b>
                    <p className="muted" style={{ margin: "4px 0 0", fontSize: 15 }}>
                      حتی تعطیلات و نیمه‌شب، اکیپ ما آماده اعزام است.
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 14 }}>
                  <span className="logo-mark" style={{ flexShrink: 0 }}>
                    <ShieldCheck />
                  </span>
                  <div>
                    <b>گارانتی کتبی روی کار</b>
                    <p className="muted" style={{ margin: "4px 0 0", fontSize: 15 }}>
                      روی همه‌ی خدمات گارانتی می‌دهیم؛ خیالتان راحت باشد.
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 14 }}>
                  <span className="logo-mark" style={{ flexShrink: 0 }}>
                    <Wallet />
                  </span>
                  <div>
                    <b>قیمت منصفانه و شفاف</b>
                    <p className="muted" style={{ margin: "4px 0 0", fontSize: 15 }}>
                      هزینه پیش از شروع کار اعلام می‌شود؛ بدون هزینه‌ی پنهان.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ background: "var(--surface)" }}>
        <div className="container">
          <StatsSection
            stats={[
              { num: "۱۵+", lbl: "سال سابقه" },
              { num: "+۱۲هزار", lbl: "پروژه موفق" },
              { num: "۲۴/۷", lbl: "آماده‌ی خدمت" },
              { num: "۹۸٪", lbl: "رضایت مشتریان" },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">
              <MessageSquareQuote /> نظرات مشتریان
            </span>
            <h2>مشتریان درباره‌ی ما چه می‌گویند</h2>
          </div>
          <div style={{ marginTop: 40 }}>
            <ReviewsGrid reviews={reviews.slice(0, 3)} />
          </div>
          <div className="center" style={{ marginTop: 32 }}>
            <Link href="/reviews" className="btn btn-ghost">
              <Star /> مشاهده همه نظرات
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">
              <BookOpen /> از وبلاگ
            </span>
            <h2>راهنماها و مقالات کاربردی</h2>
            <p>قبل از تماس، با علت‌ها و راهکارها آشنا شوید.</p>
          </div>
          <div style={{ marginTop: 40 }}>
            <ArticlesGrid articles={articles.slice(0, 3)} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaBand
            title="چاه گرفته یا لوله مسدود شده؟"
            description="همین حالا تماس بگیرید — اکیپ ما در کمتر از ۳۰ دقیقه اعزام می‌شود."
            showPhoneNumber
          />
        </div>
      </section>
    </div>
  );
}
