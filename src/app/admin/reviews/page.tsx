import type { Metadata } from "next";
import AdminReviewsPanel from "./AdminReviewsPanel";

export const metadata: Metadata = {
  title: "مدیریت نظرات",
  robots: { index: false, follow: false },
};

export default function AdminReviewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 md:py-16">
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="mb-8">
          <p className="mb-2 text-sm font-bold text-blue-700">پنل مدیریت</p>
          <h1 className="mb-2 text-3xl md:text-4xl">مدیریت نظرات مشتریان</h1>
          <p className="m-0 text-slate-500">
            نظرهای جدید را بررسی، تأیید یا رد کنید.
          </p>
        </div>
        <AdminReviewsPanel />
      </div>
    </main>
  );
}
