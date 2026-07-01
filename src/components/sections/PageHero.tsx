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

export default function PageHero({ crumbs, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="crumb">
          {crumbs.map((c, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              {i < crumbs.length - 1 && <ChevronLeft />}
            </span>
          ))}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
