import Link from "next/link";
import {
    ArrowLeft,
    BookOpen,
    Clock,
    MessageSquareQuote,
    Route,
    ShieldCheck,
    Star,
    ThumbsUp,
    Wallet,
    Wrench,
} from "lucide-react";
import ArticlesGrid from "@/components/sections/ArticlesGrid";
import CtaBand from "@/components/sections/CtaBand";
import Hero from "@/components/sections/Hero";
import ReviewsGrid from "@/components/sections/ReviewsGrid";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatsSection from "@/components/sections/StatsSection";
import TrustBar from "@/components/sections/TrustBar";
import { articles } from "@/data/articles";
import { reviews } from "@/data/reviews";
import { services } from "@/data/services";

const steps = [
    [
        "۱",
        "تماس می‌گیرید",
        "با شمارهٔ ما تماس بگیرید یا فرم درخواست را پر کنید. مشاوره و بازدید رایگان است.",
    ],
    [
        "۲",
        "کارشناس اعزام می‌شود",
        "نزدیک‌ترین اکیپ با تجهیزات کامل، در کوتاه‌ترین زمان به محل شما می‌رسد.",
    ],
    [
        "۳",
        "کار با گارانتی تحویل می‌شود",
        "پس از انجام کامل کار و تأیید شما، همراه با گارانتی کتبی تحویل می‌دهیم.",
    ],
] as const;

const benefits = [
    [
        Clock,
        "در دسترس در هر ساعت شبانه‌روز",
        "حتی تعطیلات و نیمه‌شب، اکیپ ما آمادهٔ اعزام است.",
    ],
    [
        ShieldCheck,
        "گارانتی کتبی روی کار",
        "روی همهٔ خدمات گارانتی می‌دهیم؛ خیالتان راحت باشد.",
    ],
    [
        Wallet,
        "قیمت منصفانه و شفاف",
        "هزینه پیش از شروع کار اعلام می‌شود؛ بدون هزینهٔ پنهان.",
    ],
] as const;

export default function HomePage() {
    return (
        <main className="flex flex-1 flex-col">
            <TrustBar />
            <Hero />

            <section className="py-12 md:py-20">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <SectionTitle
                        icon={Wrench}
                        eyebrow="خدمات ما"
                        title="هر مشکلی در چاه و فاضلاب دارید، حل می‌کنیم"
                        description="از تخلیه چاه فاضلاب تا تشخیص ترکیدگی لوله — همه با یک تماس."
                    />
                    <div className="mt-10">
                        <ServicesGrid services={services.slice(0, 6)} variant="preview" />
                    </div>
                    <div className="mt-8 text-center">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-blue-800"
                        >
                            <ArrowLeft className="size-5" />
                            مشاهده همه خدمات
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-12 md:py-20">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <SectionTitle
                        icon={Route}
                        eyebrow="چطور کار می‌کنیم"
                        title="فقط در ۳ قدم ساده"
                    />
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {steps.map(([number, title, text]) => (
                            <article
                                key={number}
                                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                <span className="mb-4 grid size-12 place-items-center rounded-full bg-blue-700 text-lg font-extrabold text-white">
                                    {number}
                                </span>
                                <h3 className="mb-2 text-lg">{title}</h3>
                                <p className="m-0 text-slate-500">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
                    <div className="flex aspect-video items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-blue-50 p-6 text-center font-mono text-sm text-slate-500">
                        [ تصویر: تجهیزات و ماشین‌آلات تخصصی ]
                    </div>
                    <div>
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                            <ThumbsUp className="size-4" />
                            چرا چاه‌یار؟
                        </span>
                        <h2 className="text-3xl md:text-4xl">
                            انتخاب مطمئن هزاران خانواده و کسب‌وکار
                        </h2>
                        <div className="mt-5 grid gap-4">
                            {benefits.map(([Icon, title, text]) => (
                                <div key={title} className="flex gap-4">
                                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-700 text-white">
                                        <Icon className="size-5" />
                                    </span>
                                    <div>
                                        <b>{title}</b>
                                        <p className="mt-1 mb-0 text-sm text-slate-500">{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-10 md:py-16">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <StatsSection
                        stats={[
                            { num: "۱۵+", lbl: "سال سابقه" },
                            { num: "+۱۲هزار", lbl: "پروژه موفق" },
                            { num: "۲۴/۷", lbl: "آمادهٔ خدمت" },
                            { num: "۹۸٪", lbl: "رضایت مشتریان" },
                        ]}
                    />
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <SectionTitle
                        icon={MessageSquareQuote}
                        eyebrow="نظرات مشتریان"
                        title="مشتریان دربارهٔ ما چه می‌گویند"
                    />
                    <div className="mt-10">
                        <ReviewsGrid reviews={reviews.slice(0, 3)} />
                    </div>
                    <div className="mt-8 text-center">
                        <Link
                            href="/reviews"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-bold text-blue-700 transition hover:border-blue-700 hover:bg-blue-50"
                        >
                            <Star className="size-5" />
                            مشاهده همه نظرات
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-12 md:py-20">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <SectionTitle
                        icon={BookOpen}
                        eyebrow="از وبلاگ"
                        title="راهنماها و مقالات کاربردی"
                        description="قبل از تماس، با علت‌ها و راهکارها آشنا شوید."
                    />
                    <div className="mt-10">
                        <ArticlesGrid articles={articles.slice(0, 3)} />
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <CtaBand
                        title="چاه گرفته یا لوله مسدود شده؟"
                        description="همین حالا تماس بگیرید — اکیپ ما در کمتر از ۳۰ دقیقه اعزام می‌شود."
                        showPhoneNumber
                    />
                </div>
            </section>
        </main>
    );
}

function SectionTitle({
    icon: Icon,
    eyebrow,
    title,
    description,
}: {
    icon: typeof Wrench;
    eyebrow: string;
    title: string;
    description?: string;
}) {
    return (
        <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                <Icon className="size-4" />
                {eyebrow}
            </span>
            <h2 className="mb-3 text-3xl md:text-4xl">{title}</h2>
            {description && <p className="m-0 text-slate-500">{description}</p>}
        </div>
    );
}
