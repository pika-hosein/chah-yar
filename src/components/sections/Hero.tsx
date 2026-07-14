import Link from "next/link";
import { Zap, PhoneCall, FilePenLine } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-(--surface) to-(--bg)">
      <div className="container grid grid-cols-1 items-center gap-8 py-[clamp(2.75rem,6vw,5rem)] min-[61.25rem]:grid-cols-[1.1fr_0.9fr] min-[61.25rem]:gap-12.5">
        <div>
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-(--brand-soft) px-3 py-1.5 text-xs font-bold text-(--brand) min-[38.75rem]:mb-4.5 min-[38.75rem]:gap-2 min-[38.75rem]:px-3.5 min-[38.75rem]:py-1.75 min-[38.75rem]:text-sm">
            <Zap className="size-3.5 min-[38.75rem]:size-4" /> اعزام سریع تا ۳۰ دقیقه
          </span>

          <h1 className="mb-3 text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight min-[38.75rem]:mb-4.5">
            تخلیه چاه و لوله‌بازکنی <span className="text-(--brand)">شبانه‌روزی</span>، در کمترین زمان
          </h1>

          <p className="mb-5 max-w-135 text-[clamp(1.0625rem,2vw,1.25rem)] text-(--muted) min-[38.75rem]:mb-7">
            یک تماس بگیرید، کارشناس ما با تجهیزات کامل و قیمت توافقی درجا اعزام می‌شود. بدون معطلی، با گارانتی کتبی.
          </p>

          <div className="mb-5 flex flex-col gap-2.5 min-[38.75rem]:mb-7.5 min-[38.75rem]:flex-row min-[38.75rem]:flex-wrap min-[38.75rem]:gap-3.5">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-(--accent) px-6 py-3.5 text-base font-bold text-(--accent-ink) shadow-[0_0.25rem_0.875rem_-0.5rem_rgba(15,45,80,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:brightness-[0.94] min-[38.75rem]:w-auto min-[38.75rem]:gap-2.25 min-[38.75rem]:px-8 min-[38.75rem]:py-4 min-[38.75rem]:text-lg"
            >
              <span>
                تماس فوری: <span dir="ltr">{PHONE}</span>
              </span>
              <PhoneCall className="size-4.25 min-[38.75rem]:size-4.75" />
            </a>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-[0.09375rem] border-(--border) bg-white px-6 py-3.5 text-base font-bold text-(--brand) transition-all duration-150 hover:border-(--brand) hover:bg-(--brand-soft) min-[38.75rem]:w-auto min-[38.75rem]:gap-2.25 min-[38.75rem]:px-8 min-[38.75rem]:py-4 min-[38.75rem]:text-lg"
            >
              <FilePenLine className="size-4.25 min-[38.75rem]:size-4.75" />
              ثبت درخواست آنلاین
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 min-[38.75rem]:gap-5.5">
            <div className="flex items-center gap-2 min-[38.75rem]:gap-2.5">
              <span className="text-xl font-extrabold text-(--brand) min-[38.75rem]:text-[1.625rem]">+۱۲هزار</span>
              <span className="text-xs leading-[1.4] text-(--muted) min-[38.75rem]:text-[0.84375rem]">
                پروژه موفق
                <br />
                انجام‌شده
              </span>
            </div>

            <div className="flex items-center gap-2 min-[38.75rem]:gap-2.5">
              <span className="text-xl font-extrabold text-(--brand) min-[38.75rem]:text-[1.625rem]">۴.۹</span>
              <span className="text-xs leading-[1.4] text-(--muted) min-[38.75rem]:text-[0.84375rem]">
                از ۵ امتیاز
                <br />
                رضایت مشتری
              </span>
            </div>

            <div className="flex items-center gap-2 min-[38.75rem]:gap-2.5">
              <span className="text-xl font-extrabold text-(--brand) min-[38.75rem]:text-[1.625rem]">
                ۳۰<small className="text-xs min-[38.75rem]:text-[0.9375rem]">دقیقه</small>
              </span>
              <span className="text-xs leading-[1.4] text-(--muted) min-[38.75rem]:text-[0.84375rem]">
                میانگین زمان
                <br />
                اعزام
              </span>
            </div>
          </div>
        </div>

        <div className="flex aspect-[4/3.4] items-center justify-center rounded-2xl border border-dashed border-(--border) bg-(--surface-2) bg-[repeating-linear-gradient(45deg,transparent,transparent_0.6875rem,rgba(11,95,176,0.06)_0.6875rem,rgba(11,95,176,0.06)_1.375rem)] p-3 text-center font-mono text-xs text-(--muted) shadow-[0_1.125rem_2.75rem_-1rem_rgba(10,60,120,0.28)] min-[38.75rem]:rounded-[1.625rem] min-[38.75rem]:p-4 min-[38.75rem]:text-[0.8125rem]">
          [ تصویر: اکیپ تخلیه چاه در حال کار با ماشین مکنده ]
        </div>
      </div>
    </section>
  );
}