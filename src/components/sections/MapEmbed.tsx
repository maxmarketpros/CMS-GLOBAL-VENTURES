import { Section } from "../Section";
import { Icon } from "../Icon";

type Props = {
  query: string;
  lat: number;
  lng: number;
  zoom?: number;
  caption?: string;
  address?: string;
};

export function MapEmbed({ query, lat, lng, zoom = 13, caption, address }: Props) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    query,
  )}&ll=${lat},${lng}&z=${zoom}&output=embed`;
  const externalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query,
  )}`;
  return (
    <Section className="border-t border-gold/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <div className="lg:col-span-4 flex flex-col">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="hr-gold" />
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-gold">
              On the map
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-bone leading-[1.1] tracking-tight mb-5">
            {query}
          </h2>
          {address && (
            <div className="flex items-start gap-3 text-sm text-bone-muted mb-3">
              <Icon
                name="map"
                size={16}
                strokeWidth={1.5}
                className="text-gold mt-0.5 flex-shrink-0"
              />
              <span>{address}</span>
            </div>
          )}
          {caption && (
            <p className="text-sm leading-relaxed text-bone-muted mt-2">
              {caption}
            </p>
          )}
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-gold hover:text-gold-bright transition-colors w-fit"
          >
            Open in Google Maps
            <Icon name="arrow-right" size={12} strokeWidth={2} />
          </a>
        </div>
        <div className="lg:col-span-8">
          <div className="border border-gold/20 bg-ink-card overflow-hidden">
            <div
              className="relative"
              style={{
                filter:
                  "invert(0.92) hue-rotate(180deg) saturate(0.78) contrast(0.95)",
              }}
            >
              <iframe
                src={src}
                width="100%"
                height="440"
                loading="lazy"
                style={{ border: 0, display: "block" }}
                title={`Map of ${query}`}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
