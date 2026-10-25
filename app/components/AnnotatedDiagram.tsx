
"use client";

import { useEffect, useId, useState } from "react";
import { asset } from "../lib/site";

export interface DiagramPin {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
}

interface AnnotatedDiagramProps {
  src: string;
  alt: string;
  pins: DiagramPin[];
  caption?: string;
}

export function AnnotatedDiagram({
  src,
  alt,
  pins,
  caption,
}: AnnotatedDiagramProps) {
  const [active, setActive] = useState<string | null>(null);
  const diagramId = useId();

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <figure className="annotated-figure">
      <div className="annotated-diagram">
        <img
          src={asset(src)}
          alt={alt}
          className="annotated-image"
        />

        {pins.map((pin) => {
          const isActive = active === pin.id;
          const bubbleId = `${diagramId}-${pin.id}`;

          return (
            <div
              className="diagram-pin-wrapper"
              key={pin.id}
              style={{
                left: `${pin.x}%`,
                top: `${pin.y}%`,
              }}
            >
              <button
                type="button"
                className="diagram-pin"
                aria-expanded={isActive}
                aria-controls={
                  isActive ? bubbleId : undefined
                }
                aria-label={`Details: ${pin.label}`}
                onClick={() => {
                  setActive(isActive ? null : pin.id);
                }}
              >
                i
              </button>

              {isActive && (
                <div
                  id={bubbleId}
                  className="pin-bubble"
                >
                  <strong>{pin.label}</strong>
                  <p>{pin.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {caption && (
        <figcaption className="media-caption">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
