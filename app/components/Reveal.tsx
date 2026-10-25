"use client";
import { ReactNode, useEffect, useRef } from "react";
export function Reveal({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (
            !el ||
            !window.IntersectionObserver ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
            return;
        // Graceful no-JS rendering: the content stays visible if JS never runs.
        el.classList.add("reveal-prepared");
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries)
                    if (entry.isIntersecting) {
                        el.classList.add("reveal-visible");
                        observer.unobserve(el);
                    }
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return (
        <div ref={ref} className={`reveal ${className}`}>
            {children}
        </div>
    );
}
