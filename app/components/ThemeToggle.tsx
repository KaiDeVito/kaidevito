"use client";
import { useEffect, useState } from "react";
import { IconPair } from "./IconPair";

export function ThemeToggle({ className = "" }: { className?: string }) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        setTheme(
            document.documentElement.dataset.theme === "dark"
                ? "dark"
                : "light",
        );
    }, []);

    function toggle() {
        const next =
            document.documentElement.dataset.theme === "dark"
                ? "light"
                : "dark";
        document.documentElement.dataset.theme = next;
        window.localStorage.setItem("kd-theme", next);
        setTheme(next);
    }
    return (
        <button
            type="button"
            className={`icon-link theme-toggle tooltip-anchor ${className}`}
            onClick={toggle}
            aria-label={
                theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            }
            aria-pressed={theme === "dark"}
        >
            <span className="only-light">
                <IconPair name="sun" />
            </span>
            <span className="only-dark">
                <IconPair name="moon" />
            </span>
            <span className="tooltip" role="tooltip">
                Display Mode
            </span>
        </button>
    );
}
