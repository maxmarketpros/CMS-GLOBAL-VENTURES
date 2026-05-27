"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { Icon } from "./Icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-xl border-b border-gold/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0 min-w-0">
            <div className="relative h-11 w-11 overflow-hidden border border-gold/30 bg-ink-card transition-colors group-hover:border-gold/70 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="CMS Global Ventures"
                fill
                sizes="44px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="leading-tight whitespace-nowrap">
              <div className="font-display text-base sm:text-lg font-semibold text-bone tracking-wide">
                CMS Global Ventures
              </div>
              <div className="hidden xl:block text-[10px] uppercase tracking-widest text-bone-dim">
                Estate Planning · Trusts · Asset Protection
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm">
            <div className="group relative">
              <button className="nav-underline flex items-center gap-1 whitespace-nowrap text-bone-muted hover:text-bone transition-colors py-2">
                Services
                <Icon name="chevron-down" size={14} className="transition-transform group-hover:rotate-180" strokeWidth={2} />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block pt-2 w-[28rem]">
                <div className="bg-ink-elevated border border-gold/20 p-2 shadow-2xl shadow-black/50 grid grid-cols-2 gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}/`}
                      className="block px-3 py-2.5 text-sm text-bone-muted hover:text-gold hover:bg-gold/5 transition-colors"
                    >
                      {s.shortName}
                    </Link>
                  ))}
                  <Link
                    href="/services/"
                    className="col-span-2 mt-1 block border-t border-ink-border px-3 py-2.5 text-xs font-medium uppercase tracking-widest text-gold hover:bg-gold/5 transition-colors"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="nav-underline flex items-center gap-1 whitespace-nowrap text-bone-muted hover:text-bone transition-colors py-2">
                Areas Served
                <Icon name="chevron-down" size={14} className="transition-transform group-hover:rotate-180" strokeWidth={2} />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block pt-2 w-[26rem]">
                <div className="bg-ink-elevated border border-gold/20 p-2 shadow-2xl shadow-black/50 grid grid-cols-2 gap-1">
                  {areas.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/areas-served/${a.slug}/`}
                      className="block px-3 py-2.5 text-sm text-bone-muted hover:text-gold hover:bg-gold/5 transition-colors"
                    >
                      {a.city}
                    </Link>
                  ))}
                  <Link
                    href="/areas-served/"
                    className="col-span-2 mt-1 block border-t border-ink-border px-3 py-2.5 text-xs font-medium uppercase tracking-widest text-gold hover:bg-gold/5 transition-colors"
                  >
                    View all areas →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about/" className="nav-underline text-bone-muted hover:text-bone transition-colors py-2">
              About
            </Link>
            <Link href="/process/" className="nav-underline text-bone-muted hover:text-bone transition-colors py-2">
              Process
            </Link>
            <Link href="/faq/" className="nav-underline text-bone-muted hover:text-bone transition-colors py-2">
              FAQ
            </Link>
            <Link href="/contact/" className="nav-underline text-bone-muted hover:text-bone transition-colors py-2">
              Contact
            </Link>
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a href={business.phoneHref} className="hidden xl:flex items-center gap-2 text-sm text-bone-muted hover:text-gold transition-colors whitespace-nowrap">
              <Icon name="phone" size={14} strokeWidth={2} />
              <span className="font-medium tracking-wide">{business.phone}</span>
            </a>
            <Link
              href={business.primaryCta.href}
              className="hidden md:inline-flex items-center whitespace-nowrap px-5 py-3 bg-gold-gradient text-ink text-[11px] font-semibold uppercase tracking-widest hover:bg-gold-gradient-hover transition-all shadow-[0_6px_24px_-8px_rgba(197,165,114,0.5)]"
            >
              Free Consultation
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-bone hover:text-gold transition-colors"
              aria-label="Open menu"
            >
              <Icon name="menu" size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden bg-ink/95 backdrop-blur-xl overflow-y-auto">
          <div className="flex h-20 items-center justify-between px-4 border-b border-gold/10">
            <Link href="/" onClick={() => setOpen(false)} className="font-display text-lg font-semibold text-bone tracking-wide">
              CMS Global Ventures
            </Link>
            <button onClick={() => setOpen(false)} className="p-2 text-bone hover:text-gold" aria-label="Close menu">
              <Icon name="x" size={24} strokeWidth={2} />
            </button>
          </div>
          <div className="px-4 py-8 space-y-8 text-bone">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gold mb-3">Services</div>
              <div className="space-y-1">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}/`} onClick={() => setOpen(false)} className="block py-2 text-bone-muted hover:text-gold">
                    {s.shortName}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gold mb-3">Areas Served</div>
              <div className="grid grid-cols-2 gap-1">
                {areas.map((a) => (
                  <Link key={a.slug} href={`/areas-served/${a.slug}/`} onClick={() => setOpen(false)} className="block py-2 text-bone-muted hover:text-gold">
                    {a.city}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gold mb-3">Company</div>
              <div className="space-y-1">
                <Link href="/about/" onClick={() => setOpen(false)} className="block py-2 text-bone-muted hover:text-gold">About</Link>
                <Link href="/process/" onClick={() => setOpen(false)} className="block py-2 text-bone-muted hover:text-gold">Process</Link>
                <Link href="/faq/" onClick={() => setOpen(false)} className="block py-2 text-bone-muted hover:text-gold">FAQ</Link>
                <Link href="/resources/" onClick={() => setOpen(false)} className="block py-2 text-bone-muted hover:text-gold">Resources</Link>
                <Link href="/reviews/" onClick={() => setOpen(false)} className="block py-2 text-bone-muted hover:text-gold">Reviews</Link>
                <Link href="/contact/" onClick={() => setOpen(false)} className="block py-2 text-bone-muted hover:text-gold">Contact</Link>
              </div>
            </div>
            <div className="pt-6 border-t border-gold/10 space-y-3">
              <a href={business.phoneHref} className="flex items-center gap-3 text-bone">
                <Icon name="phone" size={16} strokeWidth={2} className="text-gold" />
                {business.phone}
              </a>
              <Link
                href={business.primaryCta.href}
                onClick={() => setOpen(false)}
                className="block w-full text-center px-6 py-4 bg-gold-gradient text-ink text-[11px] font-semibold uppercase tracking-widest"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
