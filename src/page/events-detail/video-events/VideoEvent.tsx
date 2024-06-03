import React, { useEffect, useState } from "react";

interface Props {
  videolink: string;
}

const VideoPlayer: React.FC<Props> = ({ videolink }) => {
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    setVideoUrl(videolink);
  }, [videolink]);

  const getYouTubeVideoId = (url: string): string | null => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  };

  const renderVideo = () => {
    const videoId = getYouTubeVideoId(videoUrl);
    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return (
        <iframe
          className="w-full h-64 md:px-[5rem]  translate-y-[10rem] sm:h-96 md:h-[70rem]"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    } else {
      return (
        <video
          className="w-full h-64  sm:h-96 md:h-[50rem] lg:h-screen"
          controls
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <div className="flex overflow-visible justify-center items-center w-full h-96 md:h-screen">
      {videoUrl ? renderVideo() : <p>Loading...</p>}
    </div>
  );
};

export default VideoPlayer;
