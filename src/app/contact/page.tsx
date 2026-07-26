import type { Metadata } from "next";
import {
  Clock,
  MapPin,
  MessageCircle,
  PhoneCall,
  Smartphone,
  Zap,
} from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/sections/PageHero";
import { MOBILE, MOBILE_TEL, PHONE, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "تماس با ما و درخواست خدمات",
  description:
    "سریع‌ترین راه، تماس تلفنی است. می‌توانید فرم را هم پر کنید تا با شما تماس بگیریم.",
};

const details = [
  [Clock, "ساعات کاری", "۲۴ ساعته، ۷ روز هفته — حتی تعطیلات"],
  [MapPin, "محدودهٔ خدمات", "تهران، کرج و شهرهای اطراف — پوشش سراسری"],
  [MessageCircle, "پیام‌رسان‌ها", `واتساپ و تلگرام: ${MOBILE}`],
] as const;

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        crumbs={[
          { label: "خانه", href: "/" },
          { label: "تماس و درخواست خدمات" },
        ]}
        title="تماس با ما"
        description="سریع‌ترین راه، تماس تلفنی است. می‌توانید فرم زیر را هم پر کنید تا با شما تماس بگیریم."
      />
      <section className="py-12 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <div className="rounded-3xl bg-blue-700 p-8 text-white">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-blue-700">
                <Zap className="size-4" />
                فوری‌ترین راه
              </span>
              <h2 className="mb-3 text-3xl text-white">
                همین حالا تماس بگیرید
              </h2>
              <p className="mb-5 text-blue-100">
                اکیپ ما در کمتر از ۳۰ دقیقه اعزام می‌شود.
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-lg font-bold text-blue-700"
              >
                <PhoneCall className="size-5" />
                {PHONE}
              </a>
              <a
                href={`tel:${MOBILE_TEL}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white px-6 py-3 font-bold text-white"
              >
                <Smartphone className="size-5" />
                {MOBILE}
              </a>
            </div>
            <div className="mt-6 grid gap-4">
              {details.map(([Icon, title, text]) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <b>{title}</b>
                    <p className="m-0 text-sm text-slate-500">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex aspect-video items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-blue-50 p-6 text-center font-mono text-sm text-slate-500">
              [ نقشهٔ محدودهٔ خدمات‌رسانی ]
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
