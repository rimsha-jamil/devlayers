import React, { useRef, useEffect } from "react";

const HomeVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 5) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        playsInline
      >
        <source src="src/assets/homevedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black/50 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          Empowering Your <br />
          Business with <br />
          <span className="text-[#0b4ea1]">Custom Software</span> Solutions
        </h2>
        <p className="mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl max-w-3xl">
          We build modern web, mobile, and cloud apps that scale with your vision.
        </p>
      </div>
    </div>
  );
};

export default HomeVideo;
