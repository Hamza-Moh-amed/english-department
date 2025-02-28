// components/YoutubeFastPlayerWrapper.tsx
"use client"; // Ensure this is a client-side component

import dynamic from "next/dynamic";

const YoutubeFastPlayer = dynamic(() => import("./YoutubeFastPlayer"), {
  ssr: false,
});

const YoutubeFastPlayerWrapper = ({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) => {
  return <YoutubeFastPlayer title={title} videoId={videoId} />;
};

export default YoutubeFastPlayerWrapper;
