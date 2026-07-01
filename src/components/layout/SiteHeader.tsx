"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplets, Phone, FilePenLine, Menu, X } from "lucide-react";
import { BRAND, NAV, PHONE, PHONE_TEL, TAGLINE } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href === "/blog" && pathname.startsWith("/blog/"));

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            <span className="logo-mark">
              <Droplets />
            </span>
            <span>
              {BRAND}
              <small>{TAGLINE}</small>
            </span>
          </Link>

          <nav className="nav">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={isActive(n.href) ? "active" : ""}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <a href={`tel:${PHONE_TEL}`} className="header-phone">
              <Phone />
              <span>{PHONE}</span>
            </a>
            <button
              className="hamburger"
              aria-label="منو"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-nav${open ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="panel">
          <div className="top">
            <span className="logo">
              <span className="logo-mark">
                <Droplets />
              </span>
              {BRAND}
            </span>
            <button className="close" onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={isActive(n.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-accent btn-block"
            style={{ marginTop: 12 }}
            onClick={() => setOpen(false)}
          >
            <FilePenLine />
            درخواست خدمات
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="btn btn-ghost btn-block"
            style={{ marginTop: 8 }}
          >
            <Phone />
            {PHONE}
          </a>
        </div>
      </div>
    </>
  );
}
