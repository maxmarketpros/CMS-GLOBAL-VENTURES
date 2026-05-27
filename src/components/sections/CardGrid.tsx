import { Section, SectionHeader } from "../Section";
import { Icon } from "../Icon";
import type { AnyIconName } from "@/lib/icons";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
  items: { icon?: AnyIconName; title: string; body: string }[];
};

const COLS = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

export function CardGrid({
  eyebrow,
  title,
  subtitle,
  columns = 3,
  items,
}: Props) {
  return (
    <Section className="border-t border-gold/10">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div
        className={`mt-14 grid grid-cols-1 ${COLS[columns]} gap-px bg-gold/10 border border-gold/10`}
      >
        {items.map((item, i) => (
          <div key={i} className="bg-ink-card p-7 lg:p-8 flex flex-col">
            {item.icon ? (
              <div className="h-11 w-11 flex items-center justify-center border border-gold/40 text-gold mb-5">
                <Icon name={item.icon} size={20} strokeWidth={1.5} />
              </div>
            ) : (
              <div className="font-display text-3xl text-gold leading-none mb-5">
                {String(i + 1).padStart(2, "0")}
              </div>
            )}
            <h3 className="font-display text-lg lg:text-xl text-bone leading-tight mb-3">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-bone-muted">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
