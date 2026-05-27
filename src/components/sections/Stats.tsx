import { Section, SectionHeader } from "../Section";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: { value: string; label: string; sublabel?: string }[];
};

export function Stats({ eyebrow, title, subtitle, items }: Props) {
  return (
    <Section className="border-t border-gold/10">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div
        className="mt-14 grid grid-cols-1 gap-px bg-gold/10 border border-gold/10"
        style={{
          gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
        }}
      >
        {items.map((s, i) => (
          <div
            key={i}
            className="bg-ink-card p-7 lg:p-10 flex flex-col items-start"
          >
            <div className="font-display text-5xl lg:text-6xl text-gold leading-none">
              {s.value}
            </div>
            <div className="mt-5 text-sm font-medium text-bone uppercase tracking-wider">
              {s.label}
            </div>
            {s.sublabel && (
              <div className="mt-2 text-xs leading-relaxed text-bone-muted">
                {s.sublabel}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
