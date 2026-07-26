"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplets, FilePenLine, Menu, Phone, X } from "lucide-react";
import { BRAND, NAV, PHONE, PHONE_TEL, TAGLINE } from "@/lib/site";

const logo = "flex items-center gap-3 text-xl font-extrabold";
const mark =
    "grid size-11 place-items-center rounded-xl bg-blue-700 text-white";

export default function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const isActive = (href: string) =>
        pathname === href || (href === "/blog" && pathname.startsWith("/blog/"));
    return (
        <>
            <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
                <div className="mx-auto flex h-20 w-full max-w-6xl items-center gap-4 px-5">
                    <Link href="/" className={logo}>
                        <span className={mark}>
                            <Droplets className="size-6" />
                        </span>
                        <span>
                            {BRAND}
                            <small className="block text-xs font-normal text-slate-500">
                                {TAGLINE}
                            </small>
                        </span>
                    </Link>
                    <nav className="mr-auto hidden items-center gap-1 lg:flex">
                        {NAV.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={
                                    isActive(item.href)
                                        ? "rounded-xl bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700"
                                        : "rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-blue-700"
                                }
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <a
                        href={`tel:${PHONE_TEL}`}
                        className="hidden items-center gap-2 text-lg font-extrabold text-blue-700 lg:flex"
                        dir="ltr"
                    >
                        <Phone className="size-5" />
                        {PHONE}
                    </a>
                    <button
                        type="button"
                        className="mr-auto rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"
                        aria-label="منو"
                        onClick={() => setOpen(true)}
                    >
                        <Menu className="size-6" />
                    </button>
                </div>
            </header>
            {open && (
                <div
                    className="fixed inset-0 z-50 bg-slate-950/40"
                    onClick={() => setOpen(false)}
                >
                    <aside
                        className="mr-auto flex h-full w-80 max-w-full flex-col gap-2 bg-white p-5 shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-3 flex items-center justify-between">
                            <span className={logo}>
                                <span className={mark}>
                                    <Droplets className="size-6" />
                                </span>
                                {BRAND}
                            </span>
                            <button
                                type="button"
                                className="rounded-xl bg-slate-100 p-2"
                                aria-label="بستن منو"
                                onClick={() => setOpen(false)}
                            >
                                <X className="size-5" />
                            </button>
                        </div>
                        {NAV.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={
                                    isActive(item.href)
                                        ? "rounded-xl bg-blue-50 px-4 py-3 font-bold text-blue-700"
                                        : "rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                                }
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-bold text-white"
                            onClick={() => setOpen(false)}
                        >
                            <FilePenLine className="size-5" />
                            درخواست خدمات
                        </Link>
                        <a
                            href={`tel:${PHONE_TEL}`}
                            className="flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 font-bold text-blue-700"
                        >
                            <Phone className="size-5" />
                            {PHONE}
                        </a>
                    </aside>
                </div>
            )}
        </>
    );
}
