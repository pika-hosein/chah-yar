"use client";

import { useState } from "react";
import { Check, Eye, KeyRound, LoaderCircle, X } from "lucide-react";

type ReviewStatus = "pending" | "approved" | "rejected";

interface AdminReview {
  id: string;
  name: string;
  city?: string;
  rating: number;
  text: string;
  status: ReviewStatus;
  createdAt: string;
}

const statusLabel: Record<ReviewStatus, string> = {
  pending: "در انتظار بررسی",
  approved: "تأیید شده",
  rejected: "رد شده",
};

export default function AdminReviewsPanel() {
  const [key, setKey] = useState("");
  const [reviews, setReviews] = useState<AdminReview[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState("");

  async function loadReviews(apiKey = key) {
    if (!apiKey.trim()) {
      setError("کلید ادمین را وارد کنید.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/reviews", {
        headers: { "x-admin-key": apiKey },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "دریافت نظرات ممکن نیست.");
      }

      sessionStorage.setItem("admin-api-key", apiKey);
      setReviews(data.reviews ?? []);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "دریافت نظرات ممکن نیست.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: ReviewStatus) {
    setUpdatingId(id);
    setError("");

    try {
      const response = await fetch("/api/admin/reviews", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-key": key },
        body: JSON.stringify({ id, status }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "به‌روزرسانی نظر ممکن نیست.");
      }

      setReviews((current) =>
        current.map((review) =>
          review.id === id ? { ...review, status } : review,
        ),
      );
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "به‌روزرسانی نظر ممکن نیست.",
      );
    } finally {
      setUpdatingId("");
    }
  }

  return (
    <div className="space-y-6">
      <form
        className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          void loadReviews();
        }}
      >
        <label className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <KeyRound className="size-5 text-slate-500" />
          <input
            className="w-full bg-transparent outline-none"
            type="password"
            value={key}
            onChange={(event) => setKey(event.target.value)}
            placeholder="ADMIN_API_KEY"
            autoComplete="current-password"
          />
        </label>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-bold text-white disabled:opacity-60"
          disabled={loading}
        >
          {loading && <LoaderCircle className="size-5 animate-spin" />}
          نمایش نظرات
        </button>
      </form>

      {error && (
        <p className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </p>
      )}

      <div className="grid gap-4">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="mb-1 text-lg">{review.name}</h2>
                <p className="m-0 text-sm text-slate-500">
                  {review.city || "بدون شهر"} · {review.rating} از ۵
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600">
                {statusLabel[review.status]}
              </span>
            </div>
            <p className="mb-5 text-slate-700">{review.text}</p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 font-bold text-white disabled:opacity-50"
                disabled={
                  updatingId === review.id || review.status === "approved"
                }
                onClick={() => void updateStatus(review.id, "approved")}
              >
                <Check className="size-4" />
                تأیید
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 font-bold text-white disabled:opacity-50"
                disabled={
                  updatingId === review.id || review.status === "rejected"
                }
                onClick={() => void updateStatus(review.id, "rejected")}
              >
                <X className="size-4" />
                رد
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 font-bold text-slate-700"
                onClick={() =>
                  setReviews((current) =>
                    current.filter((item) => item.id !== review.id),
                  )
                }
              >
                <Eye className="size-4" />
                پنهان‌کردن
              </button>
            </div>
          </article>
        ))}
        {!loading && !reviews.length && !error && (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            برای نمایش نظرها، کلید ادمین را وارد کنید.
          </div>
        )}
      </div>
    </div>
  );
}
