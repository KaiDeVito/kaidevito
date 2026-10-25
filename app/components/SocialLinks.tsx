import { site } from "../lib/site";
import { IconPair } from "./IconPair";
import { ThemeToggle } from "./ThemeToggle";

const socials = [
    { label: "LinkedIn", icon: "linkedin", href: site.linkedin },
    { label: "Handshake", icon: "handshake", href: site.handshake },
    { label: "Indeed", icon: "indeed", href: site.indeed },
    { label: "GitHub", icon: "github", href: site.github },
];
export function SocialLink({ label }: { label: string }) {
    const item = socials.find((s) => s.label === label);
    if (!item) return null;
    return (
        <a
            className="icon-link tooltip-anchor"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
        >
            <IconPair name={item.icon} />
            <span className="tooltip" role="tooltip">
                {item.label}
            </span>
        </a>
    );
}
export function DesktopSocialLinks() {
    return (
        <nav
            aria-label="Professional profiles and appearance"
            className="desktop-socials"
        >
            <SocialLink label="LinkedIn" />
            <SocialLink label="Handshake" />
            <SocialLink label="Indeed" />
            <ThemeToggle />
            <SocialLink label="GitHub" />
        </nav>
    );
}
export function MobileSocialLinks() {
    return (
        <nav className="mobile-socials" aria-label="Professional profiles">
            <div className="mobile-social-row">
                <SocialLink label="LinkedIn" />
                <SocialLink label="Handshake" />
            </div>
            <div className="mobile-social-row">
                <SocialLink label="Indeed" />
                <SocialLink label="GitHub" />
            </div>
        </nav>
    );
}
