import Link from "next/link";
import { Icon } from "./Icon";

export type Crumb = { name: string; href?: string };

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs sm:text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-bone-dim">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {c.href && !isLast ? (
                <Link href={c.href} className="hover:text-gold transition-colors">
                  {c.name}
                </Link>
              ) : (
                <span className={isLast ? "text-bone" : ""}>{c.name}</span>
              )}
              {!isLast && (
                <Icon name="chevron-down" size={10} strokeWidth={2} className="-rotate-90 text-gold/50" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
