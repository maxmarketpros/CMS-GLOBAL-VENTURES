import { Section } from "../Section";

type Props = {
  body: string;
  attribution?: string;
};

export function Quote({ body, attribution }: Props) {
  return (
    <Section className="!py-16 lg:!py-20">
      <figure className="max-w-4xl border-l-2 border-gold pl-8 lg:pl-10">
        <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl text-bone italic leading-[1.25]">
          &ldquo;{body}&rdquo;
        </blockquote>
        {attribution && (
          <figcaption className="mt-6 text-xs uppercase tracking-widest text-gold">
            — {attribution}
          </figcaption>
        )}
      </figure>
    </Section>
  );
}
