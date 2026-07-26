"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle, Lock, Send } from "lucide-react";

const services = [
    "تخلیه چاه فاضلاب",
    "لوله‌بازکنی",
    "حفر چاه",
    "تشخیص ترکیدگی لوله",
    "لایروبی چاه و کانال",
    "نصب پمپ لجن‌کش",
    "اعزام اضطراری",
    "سایر / مشاوره",
];
const field =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white";

export default function ContactForm() {
    const [status, setStatus] = useState<
        "idle" | "pending" | "success" | "error"
    >("idle");
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        setStatus("pending");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.get("name"),
                    phone: data.get("phone"),
                    serviceType: data.get("serviceType"),
                    area: data.get("area"),
                    urgency: data.get("urgency"),
                    notes: data.get("notes"),
                }),
            });
            if (!response.ok) throw new Error();
            setStatus("success");
            form.reset();
        } catch {
            setStatus("error");
        }
    }
    return (
        <form
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-10"
            onSubmit={handleSubmit}
        >
            <h2 className="mb-2 text-2xl">ثبت درخواست خدمات</h2>
            <p className="mb-6 text-slate-500">
                فرم را پر کنید؛ کارشناس ما در کوتاه‌ترین زمان تماس می‌گیرد.
            </p>
            {status === "success" && (
                <div className="mb-5 flex items-center gap-2 rounded-2xl border border-green-200 bg-green-50 p-4 font-semibold text-green-700">
                    <CheckCircle className="size-5" />
                    درخواست شما ثبت شد. به‌زودی با شما تماس می‌گیریم.
                </div>
            )}
            {status === "error" && (
                <div className="mb-5 flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 p-4 font-semibold text-red-700">
                    <AlertCircle className="size-5" />
                    ثبت درخواست با خطا مواجه شد. لطفاً دوباره تلاش کنید.
                </div>
            )}
            <div className="grid gap-4 md:grid-cols-2">
                <label className="mb-5 block text-sm font-bold">
                    نام و نام خانوادگی
                    <input
                        className={field}
                        type="text"
                        name="name"
                        placeholder="نام شما"
                        required
                    />
                </label>
                <label className="mb-5 block text-sm font-bold">
                    شماره تماس
                    <input
                        className={`${field} text-right`}
                        type="tel"
                        name="phone"
                        placeholder="۰۹…"
                        dir="ltr"
                        required
                    />
                </label>
            </div>
            <label className="mb-5 block text-sm font-bold">
                نوع خدمت
                <select className={field} name="serviceType" required defaultValue="">
                    <option value="" disabled>
                        یک خدمت را انتخاب کنید…
                    </option>
                    {services.map((service) => (
                        <option key={service}>{service}</option>
                    ))}
                </select>
            </label>
            <div className="grid gap-4 md:grid-cols-2">
                <label className="mb-5 block text-sm font-bold">
                    منطقه / محله
                    <input
                        className={field}
                        name="area"
                        placeholder="مثلاً تهران، تهرانپارس"
                    />
                </label>
                <label className="mb-5 block text-sm font-bold">
                    فوریت
                    <select className={field} name="urgency" defaultValue="عادی">
                        <option>عادی</option>
                        <option>امروز</option>
                        <option>اضطراری — همین حالا</option>
                    </select>
                </label>
            </div>
            <label className="mb-5 block text-sm font-bold">
                توضیحات (اختیاری)
                <textarea
                    className={`${field} min-h-28`}
                    name="notes"
                    placeholder="شرح مختصری از مشکل…"
                />
            </label>
            <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-4 text-lg font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={status === "pending"}
            >
                <Send className="size-5" />
                {status === "pending" ? "در حال ارسال…" : "ارسال درخواست"}
            </button>
            <p className="mt-4 mb-0 text-center text-sm text-slate-500">
                <Lock className="ml-1 inline size-4" />
                اطلاعات شما محرمانه می‌ماند.
            </p>
        </form>
    );
}
