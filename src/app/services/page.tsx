import type { Metadata } from "next";
import { Banknote, ShieldCheck, Clock, FileText, Route } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CtaBand from "@/components/sections/CtaBand";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "خدمات | تخلیه چاه، لوله‌بازکنی، حفر چاه",
  description:
    "مجموعه‌ی کامل خدمات تخلیه چاه، فاضلاب و لوله‌کشی — همه با اعزام سریع و گارانتی کتبی.",
};

const TRUST_ITEMS = [
  { icon: Banknote, title: "تماس و بازدید رایگان", text: "قبل از کار، رایگان قیمت می‌دهیم" },
  { icon: ShieldCheck, title: "گارانتی کتبی", text: "روی همه‌ی خدمات" },
  { icon: Clock, title: "۲۴ ساعته", text: "حتی تعطیلات و شب" },
  { icon: FileText, title: "فاکتور رسمی", text: "برای اماکن اداری و تجاری" },
];

const STEPS = [
  { n: "۱", title: "تماس یا ثبت درخواست", text: "با ما تماس بگیرید یا فرم آنلاین را پر کنید." },
  { n: "۲", title: "اعلام قیمت", text: "پس از بررسی، هزینه‌ی شفاف اعلام می‌شود." },
  { n: "۳", title: "اعزام و انجام کار", text: "اکیپ مجهز در کوتاه‌ترین زمان اعزام می‌شود." },
  { n: "۴", title: "تحویل با گارانتی", text: "پس از تأیید شما، کار با گارانتی تحویل می‌شود." },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col flex-1">
      <PageHero
        crumbs={[{ label: "خانه", href: "/" }, { label: "خدمات" }]}
        title="خدمات چاه‌یار"
        description="مجموعه‌ی کامل خدمات تخلیه چاه، فاضلاب و لوله‌کشی — همه با اعزام سریع و گارانتی کتبی."
      />

      <section className="section">
        <div className="container">
          <ServicesGrid services={services} variant="full" />
        </div>
      </section>

      <section className="section-tight" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="grid grid-4">
            {TRUST_ITEMS.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span className="logo-mark">
                    <Icon />
                  </span>
                  <div>
                    <b>{t.title}</b>
                    <p className="muted" style={{ margin: 0, fontSize: 14 }}>
                      {t.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">
              <Route /> فرایند کار
            </span>
            <h2>سفارش خدمات، ساده و سریع</h2>
          </div>
          <div className="grid grid-4 steps" style={{ marginTop: 40 }}>
            {STEPS.map((s) => (
              <div key={s.n} className="step">
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBand
            title="نمی‌دانید کدام خدمت مناسب شماست؟"
            description="یک تماس بگیرید؛ کارشناس ما رایگان راهنمایی‌تان می‌کند."
          />
        </div>
      </section>
    </div>
  );
}
