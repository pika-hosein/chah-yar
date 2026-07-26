import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface Crumb {
    label: string;
    href?: string;
}

interface PageHeroProps {
    crumbs: Crumb[];
    title: string;
    description: string;
}

export default function PageHero({
    crumbs,
    title,
    description,
}: PageHeroProps) {
    return (
        <section className="border-b border-slate-200 bg-slate-50 py-10 md:py-16">
            <div className="mx-auto w-full max-w-6xl px-5">
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                    {crumbs.map((crumb, index) => (
                        <span key={index} className="inline-flex items-center gap-2">
                            {crumb.href ? (
                                <Link className="hover:text-blue-700" href={crumb.href}>
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span>{crumb.label}</span>
                            )}
                            {index < crumbs.length - 1 && <ChevronLeft className="size-4" />}
                        </span>
                    ))}
                </div>
                <h1 className="mb-0 text-3xl md:text-5xl">{title}</h1>
                <p className="mt-3 mb-0 max-w-2xl text-lg text-slate-500">
                    {description}
                </p>
            </div>
        </section>
    );
}
