"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, AlertCircle, Send } from "lucide-react";

const field =
    "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white";

export default function ReviewForm() {
    const [status, setStatus] = useState<
        "idle" | "pending" | "success" | "error"
    >("idle");
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        setStatus("pending");
        try {
            const res = await fetch("/api/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.get("name"),
                    city: data.get("city"),
                    rating: data.get("rating"),
                    text: data.get("text"),
                }),
            });
            if (!res.ok) throw new Error();
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
            {status === "success" && (
                <div className="mb-5 flex items-center gap-2 rounded-2xl border border-green-200 bg-green-50 p-4 font-semibold text-green-700">
                    <CheckCircle className="size-5" />
                    نظر شما با موفقیت ثبت شد. سپاس از همراهی‌تان!
                </div>
            )}
            {status === "error" && (
                <div className="mb-5 flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 p-4 font-semibold text-red-700">
                    <AlertCircle className="size-5" />
                    ثبت نظر با خطا مواجه شد. لطفاً دوباره تلاش کنید.
                </div>
            )}
            <div className="grid gap-4 md:grid-cols-2">
                <label className="mb-5 block text-sm font-bold">
                    نام شما
                    <input
                        className={`mt-2 ${field}`}
                        type="text"
                        name="name"
                        placeholder="مثلاً رضا محمدی"
                        required
                    />
                </label>
                <label className="mb-5 block text-sm font-bold">
                    محله / شهر
                    <input
                        className={`mt-2 ${field}`}
                        type="text"
                        name="city"
                        placeholder="مثلاً تهران، نارمک"
                    />
                </label>
            </div>
            <label className="mb-5 block text-sm font-bold">
                امتیاز شما
                <select
                    className={`mt-2 ${field}`}
                    name="rating"
                    required
                    defaultValue=""
                >
                    <option value="" disabled>
                        انتخاب کنید…
                    </option>
                    <option value="5">۵ ستاره — عالی</option>
                    <option value="4">۴ ستاره — خوب</option>
                    <option value="3">۳ ستاره — متوسط</option>
                </select>
            </label>
            <label className="mb-5 block text-sm font-bold">
                متن نظر
                <textarea
                    className={`mt-2 min-h-28 ${field}`}
                    name="text"
                    placeholder="تجربهٔ خود از کیفیت کار، زمان اعزام و برخورد را بنویسید…"
                    required
                />
            </label>
            <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-4 text-lg font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={status === "pending"}
            >
                <Send className="size-5" />
                {status === "pending" ? "در حال ارسال…" : "ثبت نظر"}
            </button>
        </form>
    );
}
