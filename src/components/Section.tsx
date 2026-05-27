type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: Props) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">{children}</div>
    </section>
  );
}

type HeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ eyebrow, title, subtitle, align = "left", className = "" }: HeaderProps) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl ${className}`}
    >
      <div className="inline-flex items-center gap-3">
        <span className="hr-gold" />
        <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-gold">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl text-bone leading-[1.1] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-bone-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
