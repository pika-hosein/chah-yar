import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import FloatingCallButton from "@/components/layout/FloatingCallButton";
import SiteFooter from "@/components/layout/SiteFooter";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: {
    default: "چاه‌یار | خدمات تخلیه چاه شبانه‌روزی — تماس فوری",
    template: "%s | چاه‌یار",
  },
  description:
    "خدمات تخلیه چاه، لوله‌بازکنی و حفر چاه با اعزام سریع، گارانتی کتبی و پوشش سراسری تهران.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingCallButton />
      </body>
    </html>
  );
}
