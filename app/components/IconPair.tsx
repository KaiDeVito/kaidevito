"use client";
import { useState } from "react";
import { asset } from "../lib/site";

// The *normal* icon follows the active theme; CSS swaps to the opposite on hover/focus.
// Image files should be placed in /public/nav. Missing icons fall back to text.
export function IconPair({
    name,
    large = false,
}: {
    name: string;
    large?: boolean;
}) {
    const [missing, setMissing] = useState(false);
    if (missing)
        return (
            <span
                className={`icon-fallback ${large ? "large" : ""}`}
                aria-hidden="true"
            >
                {name.slice(0, 2).toUpperCase()}
            </span>
        );
    return (
        <span
            className={`icon-pair ${large ? "icon-pair-large" : ""}`}
            aria-hidden="true"
        >
            <img
                className="icon-when-light"
                src={asset(`/nav/${name}_light.png`)}
                alt=""
                onError={() => setMissing(true)}
            />
            <img
                className="icon-when-dark"
                src={asset(`/nav/${name}_dark.png`)}
                alt=""
                onError={() => setMissing(true)}
            />
        </span>
    );
}
