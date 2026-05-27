import Link from "next/link";
import type { Service } from "@/data/services";
import { Icon } from "./Icon";

type Props = {
  service: Service;
  variant?: "default" | "compact";
};

export function ServiceCard({ service, variant = "default" }: Props) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group lift block border border-gold/15 bg-ink-card p-7 sm:p-8 relative overflow-hidden"
    >
      {/* Top-right corner accent */}
      <span
        aria-hidden="true"
        className="absolute top-0 right-0 h-12 w-12 border-t border-r border-gold/40 group-hover:border-gold transition-colors duration-300"
      />

      <div className="flex items-center justify-center h-14 w-14 border border-gold/40 text-gold mb-6 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
        <Icon name={service.iconName} size={26} strokeWidth={1.25} />
      </div>

      <h3 className="font-display text-2xl text-bone leading-tight mb-3 group-hover:text-gold transition-colors duration-300">
        {service.name}
      </h3>

      {variant === "default" && (
        <p className="text-sm leading-relaxed text-bone-muted mb-6">
          {service.oneLiner}
        </p>
      )}

      <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold">
        Learn more
        <Icon
          name="arrow-right"
          size={12}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}
