import { business } from "@/data/business";

type Props = {
  stats?: { value: string; label: string }[];
  className?: string;
};

export function StatsBar({ stats = business.stats, className = "" }: Props) {
  return (
    <div className={`grid grid-cols-3 gap-4 sm:gap-8 ${className}`}>
      {stats.map((s) => (
        <div
          key={s.label}
          className="border-l border-gold/40 pl-4 sm:pl-6"
        >
          <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-gold leading-none">
            {s.value}
          </div>
          <div className="mt-3 text-[10px] sm:text-xs uppercase tracking-widest text-bone-dim">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
