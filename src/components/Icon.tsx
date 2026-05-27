import { iconPath, type AnyIconName } from "@/lib/icons";

type Props = {
  name: AnyIconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
  fill?: boolean;
};

export function Icon({ name, size = 24, className = "", strokeWidth = 1.5, fill = false }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={iconPath(name)} />
    </svg>
  );
}
