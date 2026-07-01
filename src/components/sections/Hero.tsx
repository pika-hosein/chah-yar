import Link from "next/link";
import { Zap, PhoneCall, FilePenLine } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">
            <Zap /> اعزام سریع تا ۳۰ دقیقه
          </span>
          <h1>
            تخلیه چاه و لوله‌بازکنی <span className="hl">شبانه‌روزی</span>، در
            کمترین زمان
          </h1>
          <p className="lead">
            یک تماس بگیرید، کارشناس ما با تجهیزات کامل و قیمت توافقی درجا
            اعزام می‌شود. بدون معطلی، با گارانتی کتبی.
          </p>
          <div className="hero-actions">
            <a href={`tel:${PHONE_TEL}`} className="btn btn-accent btn-lg">
              <PhoneCall /> تماس فوری: {PHONE}
            </a>
            <Link href="/contact" className="btn btn-ghost btn-lg">
              <FilePenLine /> ثبت درخواست آنلاین
            </Link>
          </div>
          <div className="hero-meta">
            <div className="item">
              <span className="num">+۱۲هزار</span>
              <span className="lbl">
                پروژه موفق
                <br />
                انجام‌شده
              </span>
            </div>
            <div className="item">
              <span className="num">۴.۹</span>
              <span className="lbl">
                از ۵ امتیاز
                <br />
                رضایت مشتری
              </span>
            </div>
            <div className="item">
              <span className="num">
                ۳۰<small style={{ fontSize: 15 }}>دقیقه</small>
              </span>
              <span className="lbl">
                میانگین زمان
                <br />
                اعزام
              </span>
            </div>
          </div>
        </div>
        <div className="ph hero-visual">
          [ تصویر: اکیپ تخلیه چاه در حال کار با ماشین مکنده ]
        </div>
      </div>
    </section>
  );
}
