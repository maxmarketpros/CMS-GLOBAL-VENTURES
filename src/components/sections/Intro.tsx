import { Section, SectionHeader } from "../Section";

type Props = {
  eyebrow: string;
  title: string;
  body: string[];
  align?: "left" | "center";
};

export function Intro({ eyebrow, title, body, align = "left" }: Props) {
  return (
    <Section>
      <SectionHeader eyebrow={eyebrow} title={title} align={align} />
      <div
        className={`mt-8 ${align === "center" ? "mx-auto" : ""} max-w-3xl space-y-5`}
      >
        {body.map((p, i) => (
          <p key={i} className="text-base sm:text-lg leading-relaxed text-bone-muted">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
