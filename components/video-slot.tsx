"use client";

import { useState } from "react";

// Shows the YouTube thumbnail and loads the player only when clicked, so the
// page stays fast and YouTube sets no cookies until then. Apps without a
// video yet show a quiet placeholder.
export function VideoSlot({ video, appName }: { video: { id: string; title: string } | null; appName: string }) {
  const [playing, setPlaying] = useState(false);

  if (!video) {
    return (
      <div className="video video-empty" role="img" aria-label={`${appName} video coming soon`}>
        <span className="video-empty-name">{appName}</span>
        <span className="video-empty-note">Video coming soon</span>
      </div>
    );
  }

  if (playing) {
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button type="button" className="video video-poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${video.title}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
      <span className="play" aria-hidden>
        <svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
      </span>
    </button>
  );
}
