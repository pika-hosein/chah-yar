"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, AlertCircle, Send } from "lucide-react";

export default function ReviewForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

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
    <form className="form-card" onSubmit={handleSubmit}>
      {status === "success" && (
        <div className="form-ok show">
          <CheckCircle /> نظر شما با موفقیت ثبت شد. سپاس از همراهی‌تان!
        </div>
      )}
      {status === "error" && (
        <div className="form-error show">
          <AlertCircle /> ثبت نظر با خطا مواجه شد. لطفاً دوباره تلاش کنید.
        </div>
      )}

      <div className="field-row">
        <div className="field">
          <label>نام شما</label>
          <input type="text" name="name" placeholder="مثلاً رضا محمدی" required />
        </div>
        <div className="field">
          <label>محله / شهر</label>
          <input type="text" name="city" placeholder="مثلاً تهران، نارمک" />
        </div>
      </div>
      <div className="field">
        <label>امتیاز شما</label>
        <select name="rating" required defaultValue="">
          <option value="" disabled>
            انتخاب کنید…
          </option>
          <option value="5">۵ ستاره — عالی</option>
          <option value="4">۴ ستاره — خوب</option>
          <option value="3">۳ ستاره — متوسط</option>
        </select>
      </div>
      <div className="field">
        <label>متن نظر</label>
        <textarea
          name="text"
          placeholder="تجربه‌ی خود از کیفیت کار، زمان اعزام و برخورد را بنویسید…"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={status === "pending"}>
        <Send /> {status === "pending" ? "در حال ارسال…" : "ثبت نظر"}
      </button>
    </form>
  );
}
