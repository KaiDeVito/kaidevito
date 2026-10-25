
"use client";

import { useEffect, useState } from "react";
import { asset } from "../lib/site";

interface VideoViewerProps {
  src: string;
  title: string;
  poster?: string;
}

function getYouTubeId(src: string): string | null {
  try {
    const url = new URL(src);
    const host = url.hostname.toLowerCase();

    let id: string | null = null;

    if (
      host === "youtube.com" ||
      host === "www.youtube.com" ||
      host === "m.youtube.com" ||
      host === "youtube-nocookie.com" ||
      host === "www.youtube-nocookie.com"
    ) {
      if (url.pathname === "/watch") {
        id = url.searchParams.get("v");
      } else {
        const match = url.pathname.match(
          /^\/(?:embed|shorts|live)\/([^/]+)/
        );
        id = match?.[1] ?? null;
      }
    } else if (host === "youtu.be") {
      id = url.pathname.split("/")[1] || null;
    }

    // YouTube video IDs contain 11 characters.
    return id && /^[a-zA-Z0-9_-]{11}$/.test(id)
      ? id
      : null;
  } catch {
    return null;
  }
}

export function VideoViewer({
  src,
  poster,
  title,
}: VideoViewerProps) {
  const [open, setOpen] = useState(false);

  const youtubeId = getYouTubeId(src);
  const isYouTube = youtubeId !== null;

  // Use a supplied poster, otherwise retrieve the
  // YouTube video's standard thumbnail.
  const thumbnail = poster
    ? asset(poster)
    : youtubeId
      ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
      : undefined;

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="video-thumbnail"
        onClick={() => setOpen(true)}
        aria-label={`Play video: ${title}`}
      >
        {thumbnail ? (
          <img
            src={thumbnail}
            alt=""
            loading="lazy"
          />
        ) : (
          <span className="video-thumbnail-placeholder" />
        )}

        <span
          className="play-circle"
          aria-hidden="true"
        >
          ▶
        </span>

        <span className="video-name">
          {title}
        </span>
      </button>

      {open && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <div
            className="media-modal"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video player"
            >
              ×
            </button>

            {isYouTube ? (
              <iframe
                className="modal-video"
                src={
                  `https://www.youtube-nocookie.com/embed/${youtubeId}` +
                  "?autoplay=1&rel=0"
                }
                title={title}
                allow={
                  "accelerometer; autoplay; " +
                  "clipboard-write; encrypted-media; " +
                  "gyroscope; picture-in-picture; " +
                  "web-share"
                }
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <video
                controls
                autoPlay
                playsInline
                src={asset(src)}
                poster={thumbnail}
                className="modal-video"
              >
                Your browser does not support
                video playback.
              </video>
            )}
          </div>
        </div>
      )}
    </>
  );
}
