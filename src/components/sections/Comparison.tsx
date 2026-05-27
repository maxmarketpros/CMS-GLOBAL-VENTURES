import { Section, SectionHeader } from "../Section";
import { Icon } from "../Icon";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  columns: { heading: string; tagline?: string; bullets: string[] }[];
};

export function Comparison({ eyebrow, title, subtitle, columns }: Props) {
  return (
    <Section className="border-t border-gold/10">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div
        className="mt-12 grid grid-cols-1 gap-px bg-gold/10 border border-gold/10"
        style={{
          gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
        }}
      >
        {columns.map((col, i) => (
          <div key={i} className="bg-ink-card p-7 lg:p-8 flex flex-col">
            <div className="text-[10px] uppercase tracking-widest text-gold mb-3">
              Option {String.fromCharCode(65 + i)}
            </div>
            <h3 className="font-display text-2xl text-bone leading-tight">
              {col.heading}
            </h3>
            {col.tagline && (
              <p className="mt-2 text-sm italic text-bone-muted">
                {col.tagline}
              </p>
            )}
            <ul className="mt-6 space-y-3.5 flex-1">
              {col.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 flex-shrink-0 h-4 w-4 border border-gold/60 flex items-center justify-center text-gold">
                    <Icon name="check" size={10} strokeWidth={2.5} />
                  </span>
                  <span className="text-bone leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
