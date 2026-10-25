import Link from "next/link";
import { DesktopSocialLinks } from "./SocialLinks";
import { ThemeToggle } from "./ThemeToggle";

const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/research", label: "Research" },
    { href: "/documents", label: "Documents" },
    { href: "/contact", label: "Contact Me" },
];

export function SiteHeader({ home = false }: { home?: boolean }) {
    return (
        <header className={`site-header ${home ? "header-home" : ""}`}>
            {!home && (
                <nav className="section-nav" aria-label="Site pages">
                    {links.map((link) => (
                        <Link href={link.href} key={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
            <DesktopSocialLinks />
            <ThemeToggle className="mobile-theme-toggle" />
        </header>
    );
}
