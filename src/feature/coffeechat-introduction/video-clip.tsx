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

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video === null) {
      return;
    }

    if (video.requestFullscreen !== null) {
      video.requestFullscreen().catch(() => {});
    }
    // Safari 대응
    else if ('webkitRequestFullscreen' in video) {
      (
        video as HTMLVideoElement & {
          webkitRequestFullscreen: () => Promise<void>;
        }
      )
        .webkitRequestFullscreen()
        .catch(() => {});
    }
    // IE 대응
    else if ('msRequestFullscreen' in video) {
      (
        video as HTMLVideoElement & {
          msRequestFullscreen: () => Promise<void>;
        }
      )
        .msRequestFullscreen()
        .catch(() => {});
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <video
        ref={videoRef}
        poster={thumbnailSrc}
        muted
        loop
        className="cursor-pointer shadow-lg"
        onClick={handleVideoClick}
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
