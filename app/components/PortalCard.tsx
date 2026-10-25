
import Link from "next/link";
import { IconPair } from "./IconPair";

interface PortalCardProps {
  label: string;
  path: string;
  icon: string;
}

export function PortalCard({
  label,
  path,
  icon,
}: PortalCardProps) {
  return (
    <Link
      href={path}
      className="portal-card tooltip-anchor"
      aria-label={label}
    >
      <IconPair name={icon} large />

      <span className="tooltip" role="tooltip">
        {label}
      </span>
    </Link>
  );
}
