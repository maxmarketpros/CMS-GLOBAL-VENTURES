"use client";

import Script from "next/script";
import { business } from "@/data/business";
import { Icon } from "./Icon";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
};

export function FormSection({
  eyebrow = "Get In Touch",
  title = "Schedule Your Free Consultation",
  subtitle = "Tell us a little about your situation and we'll be in touch within one business day. Every consultation is free and confidential.",
}: Props) {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-bone leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 text-base sm:text-lg text-bone-muted max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Contact details */}
          <div className="lg:col-span-4">
            <div className="border border-gold/20 bg-ink-card p-8 lg:p-10 h-full">
              <div className="text-[10px] uppercase tracking-widest text-gold mb-6">
                Direct Line
              </div>
              <div className="space-y-7">
                <a href={business.phoneHref} className="flex items-start gap-4 group">
                  <div className="h-10 w-10 flex items-center justify-center border border-gold/40 text-gold group-hover:bg-gold/10 group-hover:border-gold transition-all">
                    <Icon name="phone" size={16} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-bone-dim">Phone</div>
                    <div className="font-display text-2xl text-bone group-hover:text-gold transition-colors mt-1">
                      {business.phone}
                    </div>
                  </div>
                </a>
                <a href={business.emailHref} className="flex items-start gap-4 group">
                  <div className="h-10 w-10 flex items-center justify-center border border-gold/40 text-gold group-hover:bg-gold/10 group-hover:border-gold transition-all">
                    <Icon name="mail" size={16} strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-widest text-bone-dim">Email</div>
                    <div className="text-base text-bone group-hover:text-gold transition-colors mt-1 break-all">
                      {business.email}
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 flex items-center justify-center border border-gold/40 text-gold">
                    <Icon name="map" size={16} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-bone-dim">Service Area</div>
                    <div className="text-base text-bone mt-1">Granite Shoals, TX</div>
                    <div className="text-sm text-bone-muted">& the Texas Hill Country</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 flex items-center justify-center border border-gold/40 text-gold">
                    <Icon name="clock" size={16} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-bone-dim">Hours</div>
                    <div className="text-base text-bone mt-1">Mon–Fri · 9 AM – 5 PM</div>
                    <div className="text-sm text-bone-muted">Sat by appointment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form embed */}
          <div className="lg:col-span-8">
            <div className="border border-gold/20 bg-ink-card p-2 sm:p-3 relative">
              {/* Corner accents */}
              <span className="absolute -top-px -left-px h-8 w-8 border-t-2 border-l-2 border-gold" aria-hidden="true" />
              <span className="absolute -top-px -right-px h-8 w-8 border-t-2 border-r-2 border-gold" aria-hidden="true" />
              <span className="absolute -bottom-px -left-px h-8 w-8 border-b-2 border-l-2 border-gold" aria-hidden="true" />
              <span className="absolute -bottom-px -right-px h-8 w-8 border-b-2 border-r-2 border-gold" aria-hidden="true" />

              <iframe
                src="https://api.leadconnectorhq.com/widget/form/10Qt6ZoUeiyLVjw4Mxig"
                style={{ width: "100%", height: "683px", border: "none", borderRadius: "0" }}
                id="inline-10Qt6ZoUeiyLVjw4Mxig"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="WebSite Form Template"
                data-height="683"
                data-layout-iframe-id="inline-10Qt6ZoUeiyLVjw4Mxig"
                data-form-id="10Qt6ZoUeiyLVjw4Mxig"
                title="Schedule Free Consultation Form"
              />
            </div>
            <p className="mt-5 text-xs text-bone-dim">
              By submitting this form you agree to be contacted by CMS Global Ventures regarding your inquiry. We never share your information.
            </p>
          </div>
        </div>
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
}
