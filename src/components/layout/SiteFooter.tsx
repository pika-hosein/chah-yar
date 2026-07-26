import Link from "next/link";
import {
    Camera,
    Clock,
    Droplets,
    MapPin,
    MessageCircle,
    PhoneCall,
    Send,
    Smartphone,
} from "lucide-react";
import { BRAND, MOBILE, MOBILE_TEL, NAV, PHONE, PHONE_TEL } from "@/lib/site";

const services = [
    "تخلیه چاه",
    "لوله‌بازکنی",
    "حفر چاه",
    "تشخیص ترکیدگی لوله",
    "نصب پمپ لجن‌کش",
];
const link = "block text-sm text-slate-300 transition hover:text-white";

export default function SiteFooter() {
    return (
        <footer className="mt-10 bg-slate-900 text-slate-300">
            <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <Link
                        href="/"
                        className="mb-4 flex items-center gap-3 text-xl font-extrabold text-white"
                    >
                        <span className="grid size-11 place-items-center rounded-xl bg-blue-700">
                            <Droplets className="size-6" />
                        </span>
                        {BRAND}
                    </Link>
                    <p className="max-w-xs text-sm">
                        واسطهٔ مطمئن خدمات تخلیه چاه، لوله‌بازکنی و حفر چاه با پوشش سراسری و
                        خدمات شبانه‌روزی.
                    </p>
                    <div className="mt-4 flex gap-2">
                        {[Camera, Send, MessageCircle].map((Icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="grid size-10 place-items-center rounded-xl bg-white/10 transition hover:bg-white/20"
                                aria-label="شبکه اجتماعی"
                            >
                                <Icon className="size-5" />
                            </a>
                        ))}
                    </div>
                </div>
                <FooterColumn title="دسترسی سریع">
                    {NAV.map((item) => (
                        <Link key={item.href} href={item.href} className={link}>
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/contact" className={link}>
                        تماس با ما
                    </Link>
                </FooterColumn>
                <FooterColumn title="خدمات">
                    {services.map((service) => (
                        <Link key={service} href="/services" className={link}>
                            {service}
                        </Link>
                    ))}
                </FooterColumn>
                <FooterColumn title="تماس با ما">
                    <div className="flex items-center gap-2 text-sm">
                        <PhoneCall className="size-5 text-blue-400" />
                        <a href={`tel:${PHONE_TEL}`} dir="ltr">
                            {PHONE}
                        </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Smartphone className="size-5 text-blue-400" />
                        <a href={`tel:${MOBILE_TEL}`} dir="ltr">
                            {MOBILE}
                        </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Clock className="size-5 text-blue-400" />
                        ۲۴ ساعته، ۷ روز هفته
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <MapPin className="size-5 text-blue-400" />
                        تهران و حومه — پوشش سراسری
                    </div>
                </FooterColumn>
            </div>
            <div className="border-t border-white/10">
                <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-between gap-3 px-5 py-5 text-sm text-slate-400">
                    <span>© ۱۴۰۴ {BRAND} — تمامی حقوق محفوظ است.</span>
                    <span>طراحی‌شده برای نمونهٔ اولیه</span>
                </div>
            </div>
        </footer>
    );
}
function FooterColumn({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-3">
            <h4 className="mb-1 text-base text-white">{title}</h4>
            {children}
        </div>
    );
}
