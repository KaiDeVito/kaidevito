
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { asset } from "../lib/site";

interface ImageDisplayProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ImageDisplay({
  src,
  alt,
  caption,
}: ImageDisplayProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    // Prevent the background page from scrolling.
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="image-open"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge ${alt}`}
        aria-haspopup="dialog"
      >
        <img src={asset(src)} alt={alt} />
        <span>Click to Enlarge</span>
      </button>

      {caption && (
        <p className="media-caption">{caption}</p>
      )}

      {mounted &&
        open &&
        createPortal(
          <div
            className="modal-backdrop"
            onClick={() => setOpen(false)}
          >
            <div
              className="media-modal"
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close"
                onClick={() => setOpen(false)}
                aria-label="Close enlarged image"
                autoFocus
              >
                ×
              </button>

              <img
                className="modal-image"
                src={asset(src)}
                alt={alt}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
