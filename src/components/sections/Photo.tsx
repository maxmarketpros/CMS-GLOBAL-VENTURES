import Image from "next/image";
import { Section } from "../Section";

type Props = {
  image: string;
  alt: string;
  caption?: string;
  aspect?: "wide" | "square" | "tall";
};

const ASPECT = {
  wide: "aspect-[21/9]",
  square: "aspect-[4/3]",
  tall: "aspect-[3/4]",
};

export function Photo({ image, alt, caption, aspect = "wide" }: Props) {
  return (
    <Section className="!py-12 lg:!py-16">
      <figure className="relative">
        <div
          className={`relative ${ASPECT[aspect]} overflow-hidden border border-gold/20`}
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        </div>
        {caption && (
          <figcaption className="mt-4 text-xs uppercase tracking-widest text-bone-dim">
            {caption}
          </figcaption>
        )}
      </figure>
    </Section>
  );
}
