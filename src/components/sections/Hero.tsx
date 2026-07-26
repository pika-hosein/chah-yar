import Link from "next/link";
import { FilePenLine, PhoneCall, Zap } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/lib/site";

export default function Hero() {
    return (
        <section className="bg-slate-50" dir="rtl">
            <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-5 lg:py-20">
                <div className="min-w-0 lg:col-span-3">
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                        <Zap className="size-4 shrink-0" />
                        اعزام سریع تا ۳۰ دقیقه
                    </span>

                    <h1 className="mb-5 max-w-none text-4xl leading-snug md:text-5xl">
                        تخلیه چاه و لوله‌بازکنی <span className="text-blue-700">شبانه‌روزی</span>، در کمترین زمان
                    </h1>

                    <p className="mb-8 max-w-xl text-base leading-8 text-slate-500 md:text-lg">
                        یک تماس بگیرید، کارشناس ما با تجهیزات کامل و قیمت توافقی درجا اعزام می‌شود. بدون معطلی، با گارانتی کتبی.
                    </p>

                    <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                        <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-4 font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-orange-600">
                            <PhoneCall className="size-5 shrink-0" />
                            <span>تماس فوری:</span>
                            <span dir="ltr">{PHONE}</span>
                        </a>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 font-bold text-blue-700 transition hover:border-blue-700 hover:bg-blue-50">
                            <FilePenLine className="size-5 shrink-0" />
                            ثبت درخواست آنلاین
                        </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-3 sm:gap-5">
                        <Stat value="+۱۲هزار" label="پروژهٔ موفق" />
                        <Stat value="۴.۹" label="رضایت مشتری" />
                        <Stat value="۳۰ دقیقه" label="میانگین اعزام" />
                    </div>
                </div>

                <div className="flex aspect-video items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-blue-50 p-6 text-center font-sans text-sm leading-7 text-slate-500 shadow-xl lg:col-span-2">
                    [ تصویر: اکیپ تخلیه چاه در حال کار با ماشین مکنده ]
                </div>
            </div>
        </section>
    );
}

function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div className="min-w-0 border-r border-slate-200 pr-3 first:border-r-0 first:pr-0 sm:pr-5">
            <b className="block whitespace-nowrap text-xl leading-7 text-blue-700 sm:text-2xl">{value}</b>
            <span className="block text-xs leading-5 text-slate-500">{label}</span>
        </div>
    );
}
