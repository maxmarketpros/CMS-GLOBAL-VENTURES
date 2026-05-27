import Link from "next/link";
import { areas } from "@/data/areas";
import { Icon } from "./Icon";

type Props = {
  excludeSlug?: string;
  limit?: number;
};

export function AreasGrid({ excludeSlug, limit }: Props) {
  const filtered = areas.filter((a) => a.slug !== excludeSlug).slice(0, limit ?? areas.length);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-gold/10 border border-gold/10">
      {filtered.map((area) => (
        <Link
          key={area.slug}
          href={`/areas-served/${area.slug}/`}
          className="group bg-ink-card p-5 lg:p-6 hover:bg-ink-elevated transition-colors text-left"
        >
          <div className="flex items-center justify-between mb-3">
            <Icon name="map" size={14} strokeWidth={2} className="text-gold" />
            <Icon
              name="arrow-right"
              size={12}
              strokeWidth={2}
              className="text-bone-dim group-hover:text-gold group-hover:translate-x-1 transition-all"
            />
          </div>
          <div className="font-display text-lg sm:text-xl text-bone group-hover:text-gold transition-colors leading-tight">
            {area.city}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-widest text-bone-dim">
            {area.county}
          </div>
        </Link>
      ))}
    </div>
  );
}

export function AreaChips({ excludeSlug }: { excludeSlug?: string }) {
  const filtered = areas.filter((a) => a.slug !== excludeSlug);
  return (
    <div className="flex flex-wrap gap-2">
      {filtered.map((area) => (
        <Link
          key={area.slug}
          href={`/areas-served/${area.slug}/`}
          className="inline-flex items-center gap-1.5 border border-gold/30 px-3.5 py-1.5 text-xs text-bone-muted hover:text-gold hover:border-gold hover:bg-gold/5 transition-all"
        >
          <Icon name="map" size={10} strokeWidth={2} />
          {area.city}
        </Link>
      ))}
    </div>
  );
}
