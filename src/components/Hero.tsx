import Image from "next/image";
import { EyebrowLeft } from "./Eyebrow";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image: string;
  imageAlt: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  size?: "full" | "compact";
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  align = "left",
  children,
  size = "full",
}: Props) {
  return (
    <section
      className={`relative overflow-hidden ${
        size === "full" ? "min-h-[88vh]" : "min-h-[52vh]"
      }`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Layered overlays — radial spotlight + dark veil */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink/95 via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 ${
          size === "full" ? "py-24 sm:py-32 lg:py-40" : "py-20 sm:py-24 lg:py-28"
        } flex flex-col ${align === "center" ? "items-center text-center" : "items-start"}`}
      >
        <EyebrowLeft className="mb-6 animate-fade-in">{eyebrow}</EyebrowLeft>
        <h1
          className={`font-display font-medium text-bone leading-[1.05] tracking-tight ${
            size === "full"
              ? "text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
              : "text-4xl sm:text-5xl lg:text-6xl"
          } max-w-4xl animate-fade-up`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-6 text-base sm:text-lg leading-relaxed text-bone-muted max-w-2xl animate-fade-up`}
            style={{ animationDelay: "120ms" }}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "240ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
