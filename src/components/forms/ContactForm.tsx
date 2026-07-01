"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, AlertCircle, Lock, Send } from "lucide-react";

const SERVICE_TYPES = [
  "تخلیه چاه فاضلاب",
  "لوله‌بازکنی",
  "حفر چاه",
  "تشخیص ترکیدگی لوله",
  "لایروبی چاه و کانال",
  "نصب پمپ لجن‌کش",
  "اعزام اضطراری",
  "سایر / مشاوره",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("pending");
    try {
      const res = await fetch("/api/contact", {
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
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2 style={{ fontSize: 24, marginBottom: 6 }}>ثبت درخواست خدمات</h2>
      <p className="muted" style={{ marginBottom: 22 }}>
        فرم را پر کنید؛ کارشناس ما در کوتاه‌ترین زمان تماس می‌گیرد.
      </p>

      {status === "success" && (
        <div className="form-ok show">
          <CheckCircle /> درخواست شما ثبت شد. به‌زودی با شما تماس می‌گیریم.
        </div>
      )}
      {status === "error" && (
        <div className="form-error show">
          <AlertCircle /> ثبت درخواست با خطا مواجه شد. لطفاً دوباره تلاش کنید.
        </div>
      )}

      <div className="field-row">
        <div className="field">
          <label>نام و نام خانوادگی</label>
          <input type="text" name="name" placeholder="نام شما" required />
        </div>
        <div className="field">
          <label>شماره تماس</label>
          <input
            type="tel"
            name="phone"
            placeholder="۰۹…"
            required
            style={{ direction: "ltr", textAlign: "right" }}
          />
        </div>
      </div>
      <div className="field">
        <label>نوع خدمت</label>
        <select name="serviceType" required defaultValue="">
          <option value="" disabled>
            یک خدمت را انتخاب کنید…
          </option>
          {SERVICE_TYPES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="field-row">
        <div className="field">
          <label>منطقه / محله</label>
          <input type="text" name="area" placeholder="مثلاً تهران، تهرانپارس" />
        </div>
        <div className="field">
          <label>فوریت</label>
          <select name="urgency" defaultValue="عادی">
            <option>عادی</option>
            <option>امروز</option>
            <option>اضطراری — همین حالا</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label>توضیحات (اختیاری)</label>
        <textarea name="notes" placeholder="شرح مختصری از مشکل…" />
      </div>
      <button type="submit" className="btn btn-accent btn-block btn-lg" disabled={status === "pending"}>
        <Send /> {status === "pending" ? "در حال ارسال…" : "ارسال درخواست"}
      </button>
      <p className="muted center" style={{ fontSize: 13, margin: "14px 0 0" }}>
        <Lock style={{ width: 13, verticalAlign: -2 }} /> اطلاعات شما محرمانه می‌ماند.
      </p>
    </form>
  );
}
