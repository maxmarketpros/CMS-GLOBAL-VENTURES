import Link from "next/link";
import Image from "next/image";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-ink mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="CMS Global Ventures — Home">
              <Image
                src="/logo.png"
                alt="CMS Global Ventures"
                width={2172}
                height={574}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-bone-muted max-w-xs">
              {business.shortDescription}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 border border-gold/30 text-[10px] uppercase tracking-widest text-gold">
              <Icon name="map" size={12} strokeWidth={2} />
              Granite Shoals, TX
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-5">Services</div>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="text-bone-muted hover:text-bone transition-colors">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-5">Areas Served</div>
            <ul className="space-y-3 text-sm">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas-served/${a.slug}/`} className="text-bone-muted hover:text-bone transition-colors">
                    {a.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-5">Company</div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about/" className="text-bone-muted hover:text-bone transition-colors">About</Link></li>
              <li><Link href="/process/" className="text-bone-muted hover:text-bone transition-colors">Our Process</Link></li>
              <li><Link href="/free-consultation/" className="text-bone-muted hover:text-bone transition-colors">Free Consultation</Link></li>
              <li><Link href="/faq/" className="text-bone-muted hover:text-bone transition-colors">FAQ</Link></li>
              <li><Link href="/resources/" className="text-bone-muted hover:text-bone transition-colors">Resources</Link></li>
              <li><Link href="/reviews/" className="text-bone-muted hover:text-bone transition-colors">Reviews</Link></li>
              <li><Link href="/contact/" className="text-bone-muted hover:text-bone transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-5">Contact</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={business.phoneHref} className="inline-flex items-center gap-2 text-bone hover:text-gold transition-colors">
                  <Icon name="phone" size={14} strokeWidth={2} className="text-gold" />
                  <span>{business.phone}</span>
                </a>
              </li>
              <li>
                <a href={business.emailHref} className="inline-flex items-center gap-2 text-bone-muted hover:text-gold transition-colors break-all">
                  <Icon name="mail" size={14} strokeWidth={2} className="text-gold flex-shrink-0" />
                  <span>{business.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-bone-muted">
                <Icon name="clock" size={14} strokeWidth={2} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div>Mon–Fri 9 AM – 5 PM</div>
                  <div className="text-bone-dim text-xs mt-0.5">Sat by appointment</div>
                </div>
              </li>
            </ul>
            <Link
              href={business.primaryCta.href}
              className="mt-6 inline-flex items-center px-5 py-2.5 bg-gold-gradient text-ink text-[10px] font-semibold uppercase tracking-widest hover:bg-gold-gradient-hover transition-all"
            >
              Free Consultation
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-gold/10">
          <p className="text-xs leading-relaxed text-bone-dim max-w-4xl">
            {business.disclaimer}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-bone-dim">
          <div>
            © {business.copyrightYear} CMS Global Ventures. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="hover:text-bone transition-colors">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-bone transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
