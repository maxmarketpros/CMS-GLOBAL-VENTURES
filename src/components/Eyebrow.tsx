type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: Props) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="hr-gold" />
      <span className="text-xs font-medium uppercase tracking-widest text-gold">{children}</span>
      <span className="hr-gold" />
    </div>
  );
}

export function EyebrowLeft({ children, className = "" }: Props) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="hr-gold" />
      <span className="text-xs font-medium uppercase tracking-widest text-gold">{children}</span>
    </div>
  );
}
