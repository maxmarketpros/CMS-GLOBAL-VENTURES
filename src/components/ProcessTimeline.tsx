import { Icon } from "./Icon";
import type { AnyIconName } from "@/lib/icons";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: AnyIconName;
};

export const defaultProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "A focused 30-minute conversation to understand your family, your assets, and what you want your plan to do. No pressure, no obligation.",
    icon: "calendar",
  },
  {
    number: "02",
    title: "Plan Design",
    description:
      "We map out the right structure for your situation — which trusts, which entities, which documents — and walk you through it before we draft anything.",
    icon: "sparkle",
  },
  {
    number: "03",
    title: "Document Drafting",
    description:
      "Custom-drafted documents tailored to your plan. Reviewed in plain English with you before signing.",
    icon: "scroll",
  },
  {
    number: "04",
    title: "Funding & Support",
    description:
      "We retitle your assets into the trust — the step most plans skip — and stay with you for the lifetime of the plan.",
    icon: "shield",
  },
];

type Props = { steps?: ProcessStep[] };

export function ProcessTimeline({ steps = defaultProcess }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/10">
      {steps.map((step) => (
        <div
          key={step.number}
          className="bg-ink-card p-8 lg:p-10 relative group transition-colors hover:bg-ink-elevated"
        >
          <div className="flex items-start justify-between mb-8">
            <div className="font-display text-3xl text-gold leading-none">{step.number}</div>
            <div className="h-10 w-10 flex items-center justify-center border border-gold/30 text-gold group-hover:border-gold transition-colors">
              <Icon name={step.icon} size={20} strokeWidth={1.5} />
            </div>
          </div>
          <h3 className="font-display text-xl text-bone mb-3 leading-tight">{step.title}</h3>
          <p className="text-sm leading-relaxed text-bone-muted">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
