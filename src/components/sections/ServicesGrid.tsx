import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Service } from "@/types";
interface ServicesGridProps {
    services: Service[];
    variant?: "preview" | "full";
}
export default function ServicesGrid({
    services,
    variant = "full",
}: ServicesGridProps) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
                const Icon = s.icon;
                return (
                    <article
                        key={s.title}
                        className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        <span className="mb-4 grid size-14 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                            <Icon className="size-7" />
                        </span>
                        <h3 className="mb-2 text-xl">{s.title}</h3>
                        <p className="mb-4 text-slate-500">{s.short}</p>
                        {variant === "preview" ? (
                            <Link
                                href="/services"
                                className="mt-auto inline-flex items-center gap-2 font-bold text-blue-700"
                            >
                                جزئیات بیشتر <ArrowLeft className="size-4" />
                            </Link>
                        ) : (
                            <div className="mt-auto flex items-center justify-between gap-3">
                                <b className="text-sm text-blue-700">{s.price}</b>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 font-bold text-blue-700"
                                >
                                    درخواست <ArrowLeft className="size-4" />
                                </Link>
                            </div>
                        )}
                    </article>
                );
            })}
        </div>
    );
}
