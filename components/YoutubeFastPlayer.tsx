"use client"; // Ensures the component runs only on the client side
import React, { useEffect } from "react";

interface YoutubeFastPlayerProps {
  videoId: string;
  title: string;
}

const YoutubeFastPlayer: React.FC<YoutubeFastPlayerProps> = ({
  videoId,
  title,
}) => {
  useEffect(() => {
    // Load the YouTube iframe API dynamically
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player("youtube-player", {
        videoId,
        events: {
          onReady: (event: any) => {
            // Set playback speed to 1.25x when the player is ready
            event.target.setPlaybackRate(1.25);
            event.target.playVideo(); // Play the video after setting the speed
          },
        },
      });
    };

    return () => {
      // Clean up the script on unmount
      const scriptTag = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );
      if (scriptTag) scriptTag.remove();
    };
  }, [videoId]);

  return (
    <>
      <h2 className="text-2xl font-semibold text-left">{title}</h2>
      <div className="video-container">
        <div className="video-container-2">
          <div id="youtube-player" className="video-frame"></div>
        </div>
      </div>
    </>
  );
};

export default YoutubeFastPlayer;
