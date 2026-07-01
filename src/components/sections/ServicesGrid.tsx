import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Service } from "@/types";

interface ServicesGridProps {
  services: Service[];
  variant?: "preview" | "full";
}

export default function ServicesGrid({ services, variant = "full" }: ServicesGridProps) {
  return (
    <div className="grid grid-3">
      {services.map((s) => {
        const Icon = s.icon;
        if (variant === "preview") {
          return (
            <Link key={s.title} href="/services" className="card service-card">
              <span className="ico">
                <Icon />
              </span>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <span className="more">
                جزئیات بیشتر <ArrowLeft />
              </span>
            </Link>
          );
        }
        return (
          <div key={s.title} className="card service-card">
            <span className="ico">
              <Icon />
            </span>
            <h3>{s.title}</h3>
            <p>{s.short}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                marginTop: "auto",
              }}
            >
              <span style={{ fontWeight: 800, color: "var(--brand)", fontSize: 14.5 }}>
                {s.price}
              </span>
              <Link href="/contact" className="more">
                درخواست <ArrowLeft />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
