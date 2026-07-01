import type { Metadata } from "next";
import {
  Building2,
  HeartHandshake,
  ShieldCheck,
  Zap,
  Award,
  Users,
  MapPin,
  PhoneCall,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import StatsSection from "@/components/sections/StatsSection";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "درباره ما",
  description:
    "چاه‌یار، واسطه‌ای مطمئن میان شما و بهترین اکیپ‌های خدمات تخلیه چاه در سراسر تهران و حومه.",
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "صداقت و شفافیت",
    text: "قیمت پیش از کار اعلام می‌شود؛ نه هزینه‌ی پنهان، نه کار اضافه‌ی بی‌مورد.",
  },
  {
    icon: Zap,
    title: "سرعت در اعزام",
    text: "در مواقع اضطراری، هر دقیقه مهم است. ما برای کوتاه‌ترین زمان اعزام بهینه شده‌ایم.",
  },
  {
    icon: Award,
    title: "کیفیت تضمین‌شده",
    text: "روی همه‌ی خدمات گارانتی کتبی می‌دهیم و تا رضایت کامل شما پای کار می‌مانیم.",
  },
  {
    icon: Users,
    title: "اکیپ‌های مجرب",
    text: "همه‌ی تیم‌های همکار ما احراز هویت و ارزیابی کیفی شده‌اند.",
  },
  {
    icon: MapPin,
    title: "پوشش گسترده",
    text: "در تمام مناطق تهران و شهرهای اطراف در خدمت شما هستیم.",
  },
  {
    icon: PhoneCall,
    title: "پشتیبانی واقعی",
    text: "شبانه‌روز، حتی تعطیلات، یک انسان واقعی پاسخ تماس شما را می‌دهد.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      <PageHero
        crumbs={[{ label: "خانه", href: "/" }, { label: "درباره ما" }]}
        title="درباره چاه‌یار"
        description="واسطه‌ای مطمئن میان شما و بهترین اکیپ‌های خدمات تخلیه چاه در سراسر تهران و حومه."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: 50 }}>
            <div>
              <span className="eyebrow">
                <Building2 /> داستان ما
              </span>
              <h2 style={{ fontSize: "clamp(24px,3.2vw,34px)" }}>
                ۱۵ سال در کنار مردم، در سخت‌ترین لحظه‌ها
              </h2>
              <p className="muted" style={{ fontSize: 17 }}>
                چاه‌یار با یک هدف ساده شروع شد: اینکه وقتی چاه کسی نیمه‌شب پر
                می‌شود، بداند به چه کسی زنگ بزند و خیالش راحت باشد که کار درست
                و با قیمت منصفانه انجام می‌شود.
              </p>
              <p className="muted" style={{ fontSize: 17 }}>
                امروز ما مجموعه‌ای از باتجربه‌ترین اکیپ‌های تخلیه چاه،
                لوله‌بازکنی و حفر چاه را گرد هم آورده‌ایم و کیفیت کار همه‌ی
                آن‌ها را تضمین می‌کنیم. نقش ما این است که شما را سریع به
                نزدیک‌ترین و مطمئن‌ترین تیم وصل کنیم.
              </p>
            </div>
            <div className="ph" style={{ aspectRatio: "4/3.4" }}>
              [ تصویر: تیم چاه‌یار / دفتر کار ]
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">
              <HeartHandshake /> ارزش‌های ما
            </span>
            <h2>به چه چیزهایی پایبندیم</h2>
          </div>
          <div className="grid grid-3" style={{ marginTop: 40 }}>
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card service-card">
                  <span className="ico">
                    <Icon />
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <StatsSection
            stats={[
              { num: "۱۵+", lbl: "سال سابقه" },
              { num: "+۱۲هزار", lbl: "پروژه موفق" },
              { num: "+۴۰", lbl: "اکیپ همکار" },
              { num: "۹۸٪", lbl: "رضایت مشتریان" },
            ]}
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBand
            title="آماده‌ی کمک به شما هستیم"
            description="هر ساعت از شبانه‌روز، فقط یک تماس فاصله دارید."
          />
        </div>
      </section>
    </div>
  );
}
