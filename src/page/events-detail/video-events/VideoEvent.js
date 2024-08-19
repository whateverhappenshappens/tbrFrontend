import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const VideoPlayer = ({ videolink }) => {
    const [videoUrl, setVideoUrl] = useState("");
    useEffect(() => {
        setVideoUrl(videolink);
    }, [videolink]);
    const getYouTubeVideoId = (url) => {
        const match = url.match(/[?&]v=([^&]+)/);
        return match ? match[1] : null;
    };
    const renderVideo = () => {
        const videoId = getYouTubeVideoId(videoUrl);
        if (videoId) {
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            return (_jsx("iframe", { className: "w-full h-64 md:px-[5rem]  translate-y-[10rem] sm:h-96 md:h-[70rem]", src: embedUrl, title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }));
        }
        else {
            return (_jsxs("video", { className: "w-full h-64  sm:h-96 md:h-[50rem] lg:h-screen", controls: true, children: [_jsx("source", { src: videoUrl, type: "video/mp4" }), "Your browser does not support the video tag."] }));
        }
    };
    return (_jsx("div", { className: "flex overflow-visible justify-center items-center w-full h-96 md:h-screen", children: videoUrl ? renderVideo() : _jsx("p", { children: "Loading..." }) }));
};
export default VideoPlayer;
