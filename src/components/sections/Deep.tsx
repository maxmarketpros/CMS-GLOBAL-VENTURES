import { Section } from "../Section";

type Props = {
  eyebrow: string;
  title: string;
  body: string[];
};

export function Deep({ eyebrow, title, body }: Props) {
  return (
    <Section className="border-t border-gold/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="hr-gold" />
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-gold">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-bone leading-[1.1] tracking-tight">
            {title}
          </h2>
        </div>
        <div className="lg:col-span-8 lg:pl-6 space-y-5">
          {body.map((p, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-bone-muted first:text-lg first:text-bone"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
