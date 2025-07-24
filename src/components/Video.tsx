'use client';

import { useState, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const descRef = useScrollReveal({ origin: 'left' });
  const contentRef = useScrollReveal({ origin: 'right', interval: 100 });

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="section">
      <h2 className="section__title">Video Tour</h2>

      <div className="container pb-4 md:grid md:grid-cols-[0.7fr] md:justify-center">
        <p
          ref={descRef}
          className="text-center mb-10 md:px-32"
        >
          Find out more with our video of the most beautiful and pleasant
          places for you and your family.
        </p>

        <div ref={contentRef} className="relative">
          <video
            ref={videoRef}
            className="w-full h-auto"
            onEnded={handleVideoEnd}
            poster="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button
            onClick={handlePlayPause}
            className="button button--flex absolute right-4 -bottom-4 px-6 py-4"
          >
            <i
              className={`text-xl ${
                isPlaying ? 'ri-pause-line' : 'ri-play-line'
              }`}
            ></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Video;