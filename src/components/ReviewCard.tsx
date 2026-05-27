import type { Review } from "@/data/reviews";

type Props = {
  review: Review;
  variant?: "default" | "compact";
};

export function ReviewCard({ review, variant = "default" }: Props) {
  return (
    <article className="lift border border-gold/15 bg-ink-card p-7 sm:p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div className="text-gold text-xl tracking-[0.18em]" aria-label={`${review.rating} out of 5 stars`}>
          ★★★★★
        </div>
        <div className="text-[10px] uppercase tracking-widest text-bone-dim">
          {review.date}
        </div>
      </div>

      <blockquote className="flex-1 mb-7">
        <p className="font-display text-base sm:text-lg leading-relaxed text-bone italic">
          &ldquo;{review.body}&rdquo;
        </p>
      </blockquote>

      <div className="pt-5 border-t border-ink-border flex items-center gap-4">
        <div className="h-11 w-11 flex-shrink-0 border border-gold/40 flex items-center justify-center font-display text-sm font-medium text-gold">
          {review.initials}
        </div>
        <div className="min-w-0">
          <div className="font-display text-base text-bone leading-tight">{review.name}</div>
          <div className="text-[11px] text-bone-muted mt-0.5 truncate">
            {review.location} · {review.service}
          </div>
        </div>
      </div>
    </article>
  );
}
