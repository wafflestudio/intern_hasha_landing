import { useEffect, useState } from 'react';

import data from './logo.json';

export const VerticalCarousel = () => {
  const { logoData } = data;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logoData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [logoData.length]);

  return (
    <div className="relative h-50 overflow-hidden">
      <div
        className="flex flex-col gap-5 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateY(-${index * 2.75}rem)`,
        }}
      >
        {[...logoData, ...logoData].map(({ alt, src }, idx) => (
          <div
            key={`carousel-${idx}`}
            className="flex h-6 items-center justify-center"
          >
            <img
              alt={alt}
              src={src}
              className="h-6 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
