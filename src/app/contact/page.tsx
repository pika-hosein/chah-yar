import type { Metadata } from "next";
import { Zap, PhoneCall, Smartphone, Clock, MapPin, MessageCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { MOBILE, MOBILE_TEL, PHONE, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "تماس با ما و درخواست خدمات",
  description: "سریع‌ترین راه، تماس تلفنی است. می‌توانید فرم را هم پر کنید تا با شما تماس بگیریم.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1">
      <PageHero
        crumbs={[{ label: "خانه", href: "/" }, { label: "تماس و درخواست خدمات" }]}
        title="تماس با ما"
        description="سریع‌ترین راه، تماس تلفنی است. می‌توانید فرم زیر را هم پر کنید تا با شما تماس بگیریم."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 40, alignItems: "start" }}>
            <div>
              <div className="cta-band" style={{ textAlign: "right", padding: 30 }}>
                <span
                  className="eyebrow"
                  style={{ background: "rgba(255,255,255,.18)", color: "#fff" }}
                >
                  <Zap /> فوری‌ترین راه
                </span>
                <h2 style={{ fontSize: 24, marginTop: 8 }}>همین حالا تماس بگیرید</h2>
                <p style={{ marginBottom: 18 }}>اکیپ ما در کمتر از ۳۰ دقیقه اعزام می‌شود.</p>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost btn-lg btn-block">
                  <PhoneCall /> {PHONE}
                </a>
                <a
                  href={`tel:${MOBILE_TEL}`}
                  className="btn btn-ghost btn-block"
                  style={{
                    marginTop: 10,
                    background: "transparent",
                    color: "#fff",
                    borderColor: "rgba(255,255,255,.5)",
                  }}
                >
                  <Smartphone /> {MOBILE}
                </a>
              </div>

              <div className="grid" style={{ gap: 14, marginTop: 22 }}>
                <div className="card" style={{ display: "flex", gap: 14, alignItems: "center", padding: 20 }}>
                  <span className="logo-mark">
                    <Clock />
                  </span>
                  <div>
                    <b>ساعات کاری</b>
                    <p className="muted" style={{ margin: 0, fontSize: 14.5 }}>
                      ۲۴ ساعته، ۷ روز هفته — حتی تعطیلات
                    </p>
                  </div>
                </div>
                <div className="card" style={{ display: "flex", gap: 14, alignItems: "center", padding: 20 }}>
                  <span className="logo-mark">
                    <MapPin />
                  </span>
                  <div>
                    <b>محدوده‌ی خدمات</b>
                    <p className="muted" style={{ margin: 0, fontSize: 14.5 }}>
                      تهران، کرج و شهرهای اطراف — پوشش سراسری
                    </p>
                  </div>
                </div>
                <div className="card" style={{ display: "flex", gap: 14, alignItems: "center", padding: 20 }}>
                  <span className="logo-mark">
                    <MessageCircle />
                  </span>
                  <div>
                    <b>پیام‌رسان‌ها</b>
                    <p className="muted" style={{ margin: 0, fontSize: 14.5 }}>
                      واتساپ و تلگرام: {MOBILE}
                    </p>
                  </div>
                </div>
              </div>

              <div className="ph" style={{ aspectRatio: "16/8", marginTop: 22 }}>
                [ نقشه‌ی محدوده‌ی خدمات‌رسانی ]
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
