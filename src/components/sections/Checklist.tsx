import { Section, SectionHeader } from "../Section";
import { Icon } from "../Icon";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  columns?: 1 | 2;
  items: { title: string; body?: string }[];
};

export function Checklist({
  eyebrow,
  title,
  subtitle,
  columns = 2,
  items,
}: Props) {
  return (
    <Section className="border-t border-gold/10">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <ul
        className={`mt-12 grid grid-cols-1 ${
          columns === 2 ? "md:grid-cols-2" : ""
        } gap-x-10 gap-y-6 max-w-5xl`}
      >
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="mt-1 flex-shrink-0 h-6 w-6 border border-gold flex items-center justify-center text-gold">
              <Icon name="check" size={14} strokeWidth={2.5} />
            </span>
            <div>
              <div className="font-display text-lg text-bone leading-tight">
                {item.title}
              </div>
              {item.body && (
                <p className="mt-1.5 text-sm leading-relaxed text-bone-muted">
                  {item.body}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
