import Link from "next/link";
import {
  Droplets,
  PhoneCall,
  Smartphone,
  Clock,
  MapPin,
  Camera,
  Send,
  MessageCircle,
} from "lucide-react";
import { BRAND, MOBILE, MOBILE_TEL, NAV, PHONE, PHONE_TEL } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-col">
          <Link href="/" className="logo">
            <span className="logo-mark">
              <Droplets />
            </span>
            {BRAND}
          </Link>
          <p style={{ maxWidth: 280 }}>
            واسطه‌ی مطمئن خدمات تخلیه چاه، لوله‌بازکنی و حفر چاه با پوشش
            سراسری و خدمات شبانه‌روزی.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <a
              href="#"
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "rgba(255,255,255,.08)",
                display: "grid",
                placeItems: "center",
                margin: 0,
              }}
            >
              <Camera />
            </a>
            <a
              href="#"
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "rgba(255,255,255,.08)",
                display: "grid",
                placeItems: "center",
                margin: 0,
              }}
            >
              <Send />
            </a>
            <a
              href="#"
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "rgba(255,255,255,.08)",
                display: "grid",
                placeItems: "center",
                margin: 0,
              }}
            >
              <MessageCircle />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>دسترسی سریع</h4>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact">تماس با ما</Link>
        </div>

        <div className="footer-col">
          <h4>خدمات</h4>
          <Link href="/services">تخلیه چاه</Link>
          <Link href="/services">لوله‌بازکنی</Link>
          <Link href="/services">حفر چاه</Link>
          <Link href="/services">تشخیص ترکیدگی لوله</Link>
          <Link href="/services">نصب پمپ لجن‌کش</Link>
        </div>

        <div className="footer-col footer-contact">
          <h4>تماس با ما</h4>
          <div className="row">
            <PhoneCall />
            <a href={`tel:${PHONE_TEL}`} style={{ margin: 0, direction: "ltr" }}>
              {PHONE}
            </a>
          </div>
          <div className="row">
            <Smartphone />
            <a href={`tel:${MOBILE_TEL}`} style={{ margin: 0, direction: "ltr" }}>
              {MOBILE}
            </a>
          </div>
          <div className="row">
            <Clock />
            <span style={{ color: "#a9bdd4" }}>۲۴ ساعته، ۷ روز هفته</span>
          </div>
          <div className="row">
            <MapPin />
            <span style={{ color: "#a9bdd4" }}>تهران و حومه — پوشش سراسری</span>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© ۱۴۰۴ {BRAND} — تمامی حقوق محفوظ است.</span>
        <span>طراحی‌شده برای نمونه‌ی اولیه</span>
      </div>
    </footer>
  );
}
