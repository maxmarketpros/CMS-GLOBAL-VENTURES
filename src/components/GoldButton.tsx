import Link from "next/link";
import { Icon } from "./Icon";

type Variant = "primary" | "ghost";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
};

export function GoldButton({ href, children, variant = "primary", className = "", arrow = true }: Props) {
  const base =
    "group inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-widest transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-gold-gradient hover:bg-gold-gradient-hover text-ink shadow-[0_8px_30px_-12px_rgba(197,165,114,0.5)] hover:shadow-[0_10px_36px_-12px_rgba(197,165,114,0.7)]"
      : "border border-gold/40 text-gold hover:border-gold hover:bg-gold/5";

  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <Icon
          name="arrow-right"
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {content}
    </Link>
  );
}
