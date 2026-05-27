"use client";

import { useState } from "react";
import type { Faq } from "@/data/faqs";
import { Icon } from "./Icon";

type Props = {
  faqs: Faq[];
  defaultOpen?: number;
};

export function FAQAccordion({ faqs, defaultOpen = 0 }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="border-t border-gold/15">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question} className="border-b border-gold/15">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-6 py-6 sm:py-7 text-left group"
              aria-expanded={isOpen}
            >
              <h3 className="font-display text-lg sm:text-xl text-bone group-hover:text-gold transition-colors leading-snug pr-4">
                {faq.question}
              </h3>
              <span
                className={`flex-shrink-0 h-9 w-9 border border-gold/40 flex items-center justify-center text-gold transition-all duration-300 ${
                  isOpen ? "rotate-180 bg-gold/10 border-gold" : "rotate-0"
                }`}
              >
                <Icon name={isOpen ? "minus" : "plus"} size={16} strokeWidth={2} />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6 sm:pb-7" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm sm:text-base leading-relaxed text-bone-muted max-w-3xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
