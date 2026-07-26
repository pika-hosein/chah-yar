import type { Metadata } from "next";
import { Banknote, Clock, FileText, Route, ShieldCheck } from "lucide-react";
import CtaBand from "@/components/sections/CtaBand";
import PageHero from "@/components/sections/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import { services } from "@/data/services";

export const metadata: Metadata = {
    title: "خدمات | تخلیه چاه، لوله‌بازکنی، حفر چاه",
    description: "مجموعهٔ کامل خدمات تخلیه چاه، فاضلاب و لوله‌کشی — همه با اعزام سریع و گارانتی کتبی.",
};

const trustItems = [
    [Banknote, "تماس و بازدید رایگان", "قبل از کار، رایگان قیمت می‌دهیم"],
    [ShieldCheck, "گارانتی کتبی", "روی همهٔ خدمات"],
    [Clock, "۲۴ ساعته", "حتی تعطیلات و شب"],
    [FileText, "فاکتور رسمی", "برای اماکن اداری و تجاری"],
] as const;

const steps = [
    ["۱", "تماس یا ثبت درخواست", "با ما تماس بگیرید یا فرم آنلاین را پر کنید."],
    ["۲", "اعلام قیمت", "پس از بررسی، هزینهٔ شفاف اعلام می‌شود."],
    ["۳", "اعزام و انجام کار", "اکیپ مجهز در کوتاه‌ترین زمان اعزام می‌شود."],
    ["۴", "تحویل با گارانتی", "پس از تأیید شما، کار با گارانتی تحویل می‌شود."],
] as const;

export default function ServicesPage() {
    return (
        <main className="flex flex-1 flex-col">
            <PageHero
                crumbs={[{ label: "خانه", href: "/" }, { label: "خدمات" }]}
                title="خدمات چاه‌یار"
                description="مجموعهٔ کامل خدمات تخلیه چاه، فاضلاب و لوله‌کشی — همه با اعزام سریع و گارانتی کتبی."
            />

            <section className="py-12 md:py-20">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <ServicesGrid services={services} variant="full" />
                </div>
            </section>

            <section className="bg-slate-50 py-10 md:py-16">
                <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4">
                    {trustItems.map(([Icon, title, text]) => (
                        <div key={title} className="flex items-center gap-3">
                            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-blue-700 text-white">
                                <Icon className="size-6" />
                            </span>
                            <div>
                                <b>{title}</b>
                                <p className="m-0 text-sm text-slate-500">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                            <Route className="size-4" />
                            فرایند کار
                        </span>
                        <h2 className="text-3xl md:text-4xl">سفارش خدمات، ساده و سریع</h2>
                    </div>
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map(([number, title, text]) => (
                            <article key={number} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
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

            <section className="pb-12 md:pb-20">
                <div className="mx-auto w-full max-w-6xl px-5">
                    <CtaBand title="نمی‌دانید کدام خدمت مناسب شماست؟" description="یک تماس بگیرید؛ کارشناس ما رایگان راهنمایی‌تان می‌کند." />
                </div>
            </section>
        </main>
    );
}
