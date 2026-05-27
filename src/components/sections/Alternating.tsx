import Image from "next/image";
import { Section } from "../Section";
import { Icon } from "../Icon";

type Props = {
  eyebrow: string;
  title: string;
  body: string[];
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
  bullets?: { title: string; body?: string }[];
};

export function Alternating({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  imageSide,
  bullets,
}: Props) {
  const isLeft = imageSide === "left";
  return (
    <Section className="border-t border-gold/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div
          className={`lg:col-span-6 ${
            isLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-gold/20">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          </div>
        </div>
        <div
          className={`lg:col-span-6 ${
            isLeft ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="hr-gold" />
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-gold">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-bone leading-[1.1] tracking-tight mb-6">
            {title}
          </h2>
          <div className="space-y-5">
            {body.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-bone-muted">
                {p}
              </p>
            ))}
          </div>
          {bullets && bullets.length > 0 && (
            <ul className="mt-8 space-y-3.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 h-5 w-5 border border-gold flex items-center justify-center text-gold">
                    <Icon name="check" size={12} strokeWidth={2.5} />
                  </span>
                  <div className="text-sm text-bone">
                    <span className="font-medium">{b.title}</span>
                    {b.body && (
                      <span className="text-bone-muted"> — {b.body}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  );
}
