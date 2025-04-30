import { useEffect, useRef } from 'react';

export const VideoClip = ({
  src,
  thumbnailSrc,
  description,
}: {
  src: string;
  thumbnailSrc: string;
  description: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video !== null && video.paused) {
      const timer = setTimeout(() => {
        video.play().catch(() => {});
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <video
        ref={videoRef}
        poster={thumbnailSrc}
        controls
        muted
        loop
        className="shadow-lg"
      >
        <source
          src={src}
          type="video/mp4"
        />
      </video>
      <p className="text-gray text-center text-sm">{description}</p>
    </div>
  );
};
