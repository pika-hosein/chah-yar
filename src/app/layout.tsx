import type { Metadata } from "next";
import localFont from "next/font/local";
import "../style/globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import FloatingCallButton from "@/components/layout/FloatingCallButton";
import SiteFooter from "@/components/layout/SiteFooter";

const yekanBakh = localFont({
  src: "../fonts/YekanBakhFaNum-VF.woff2",
  variable: "--font-yekanbakh",
  weight: "100 900",
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
    <html lang="fa" dir="rtl" className={yekanBakh.variable}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingCallButton />
      </body>
    </html>
  );
}
