import Link from "next/link";
import { Zap, PhoneCall, FilePenLine } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/lib/site";

export default function Hero() {
    return (
        <section className="bg-slate-50">
            <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-12 lg:grid-cols-2 lg:py-20">
                <div>
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                        <Zap className="size-4" />
                        اعزام سریع تا ۳۰ دقیقه
                    </span>
                    <h1 className="mb-5 text-4xl leading-tight md:text-6xl">
                        تخلیه چاه و لوله‌بازکنی{" "}
                        <span className="text-blue-700">شبانه‌روزی</span>، در کمترین زمان
                    </h1>
                    <p className="mb-7 max-w-xl text-lg text-slate-500">
                        یک تماس بگیرید، کارشناس ما با تجهیزات کامل و قیمت توافقی درجا اعزام
                        می‌شود. بدون معطلی، با گارانتی کتبی.
                    </p>
                    <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href={`tel:${PHONE_TEL}`}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-4 font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-orange-600"
                        >
                            <PhoneCall className="size-5" />
                            تماس فوری: <span dir="ltr">{PHONE}</span>
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 font-bold text-blue-700 transition hover:border-blue-700 hover:bg-blue-50"
                        >
                            <FilePenLine className="size-5" />
                            ثبت درخواست آنلاین
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-5">
                        <Stat value="+۱۲هزار" label="پروژه موفق انجام‌شده" />
                        <Stat value="۴.۹" label="رضایت مشتری" />
                        <Stat value="۳۰ دقیقه" label="میانگین زمان اعزام" />
                    </div>
                </div>
                <div className="flex aspect-video items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-blue-50 p-6 text-center font-mono text-sm text-slate-500 shadow-xl">
                    [ تصویر: اکیپ تخلیه چاه در حال کار با ماشین مکنده ]
                </div>
            </div>
        </section>
    );
}
function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex items-center gap-2">
            <b className="text-2xl text-blue-700">{value}</b>
            <span className="max-w-20 text-xs leading-5 text-slate-500">{label}</span>
        </div>
    );
}
