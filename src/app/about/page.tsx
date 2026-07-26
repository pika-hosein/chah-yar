import type { Metadata } from "next";
import {
    Award,
    Building2,
    HeartHandshake,
    MapPin,
    PhoneCall,
    ShieldCheck,
    Users,
    Zap,
} from "lucide-react";
import CtaBand from "@/components/sections/CtaBand";
import PageHero from "@/components/sections/PageHero";
import StatsSection from "@/components/sections/StatsSection";

export const metadata: Metadata = {
    title: "درباره ما",
    description:
        "چاه‌یار، واسطه‌ای مطمئن میان شما و بهترین اکیپ‌های خدمات تخلیه چاه در سراسر تهران و حومه.",
};

const values = [
    [
        ShieldCheck,
        "صداقت و شفافیت",
        "قیمت پیش از کار اعلام می‌شود؛ نه هزینهٔ پنهان، نه کار اضافهٔ بی‌مورد.",
    ],
    [
        Zap,
        "سرعت در اعزام",
        "در مواقع اضطراری، هر دقیقه مهم است. ما برای کوتاه‌ترین زمان اعزام بهینه شده‌ایم.",
    ],
    [
        Award,
        "کیفیت تضمین‌شده",
        "روی همهٔ خدمات گارانتی کتبی می‌دهیم و تا رضایت کامل شما پای کار می‌مانیم.",
    ],
    [
        Users,
        "اکیپ‌های مجرب",
        "همهٔ تیم‌های همکار ما احراز هویت و ارزیابی کیفی شده‌اند.",
    ],
    [
        MapPin,
        "پوشش گسترده",
        "در تمام مناطق تهران و شهرهای اطراف در خدمت شما هستیم.",
    ],
    [
        PhoneCall,
        "پشتیبانی واقعی",
        "شبانه‌روز، حتی تعطیلات، یک انسان واقعی پاسخ تماس شما را می‌دهد.",
    ],
] as const;

export default function AboutPage() {
    return (
        <main className="flex flex-1 flex-col">
            <PageHero
                crumbs={[{ label: "خانه", href: "/" }, { label: "درباره ما" }]}
                title="درباره چاه‌یار"
                description="واسطه‌ای مطمئن میان شما و بهترین اکیپ‌های خدمات تخلیه چاه در سراسر تهران و حومه."
            />
            <section className="py-12 md:py-20">
                <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
                    <div>
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                            <Building2 className="size-4" />
                            داستان ما
                        </span>
                        <h2 className="text-3xl md:text-4xl">
                            ۱۵ سال در کنار مردم، در سخت‌ترین لحظه‌ها
                        </h2>
                        <p className="text-lg text-slate-500">
                            چاه‌یار با یک هدف ساده شروع شد: وقتی چاه کسی نیمه‌شب پر می‌شود،
                            بداند به چه کسی زنگ بزند و خیالش راحت باشد که کار درست و با قیمت
                            منصفانه انجام می‌شود.
                        </p>
                        <p className="m-0 text-lg text-slate-500">
                            امروز ما مجموعه‌ای از باتجربه‌ترین اکیپ‌های تخلیه چاه، لوله‌بازکنی
                            و حفر چاه را گرد هم آورده‌ایم و کیفیت کار همهٔ آن‌ها را تضمین
                            می‌کنیم.
                        </p>
                    </div>
                    <div className="flex aspect-video items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-blue-50 p-6 text-center font-mono text-sm text-slate-500">
                        [ تصویر: تیم چاه‌یار / دفتر کار ]
                    </div>
                </div>
            </section>
            <section className="bg-slate-50 py-12 md:py-20">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                            <HeartHandshake className="size-4" />
                            ارزش‌های ما
                        </span>
                        <h2 className="text-3xl md:text-4xl">به چه چیزهایی پایبندیم</h2>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {values.map(([Icon, title, text]) => (
                            <article
                                key={title}
                                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                <span className="mb-4 grid size-14 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                                    <Icon className="size-7" />
                                </span>
                                <h3 className="mb-2 text-xl">{title}</h3>
                                <p className="m-0 text-slate-500">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-10 md:py-16">
                <div className="mx-auto w-full max-w-6xl px-5">
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
            <section className="pb-12 md:pb-20">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <CtaBand
                        title="آمادهٔ کمک به شما هستیم"
                        description="هر ساعت از شبانه‌روز، فقط یک تماس فاصله دارید."
                    />
                </div>
            </section>
        </main>
    );
}
