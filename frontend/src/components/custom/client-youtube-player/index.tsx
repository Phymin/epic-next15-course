"use client";

import dynamic from "next/dynamic";

const YouTubePlayer = dynamic(
  () => import("@/components/custom/client-youtube-player/youtube-play"),
  { ssr: false }
);

export default function ClientYouTubePlayer({ videoId }: { videoId: string }) {
  return <YouTubePlayer videoId={videoId} />;
}
