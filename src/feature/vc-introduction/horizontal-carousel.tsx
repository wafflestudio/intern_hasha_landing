import { useEffect, useState } from 'react';

import data from '@/feature/vc-introduction/vc.json';
import { cn } from '@/shared/lib/utils';

type Slide = {
  src: string;
  alt: string;
};
const Slider = ({
  slider,
  direction,
}: {
  slider: Slide[];
  direction: 'LEFT' | 'RIGHT';
}) => {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    setSlides([...slider, ...slider]);
  }, [slider]);
  return (
    <div className="relative flex h-12 w-full overflow-hidden">
      <div
        className={cn(
          'absolute top-0 flex h-12 w-200 shrink-0 gap-4',
          direction === 'RIGHT'
            ? 'animate-scroll-right right-0 justify-end'
            : 'animate-scroll-left left-0 justify-start'
        )}
      >
        {slides.map(({ src, alt }) => (
          <img
            key={`horizontal-carousel-image-${alt}`}
            src={src}
            alt={alt}
            className="bg-gray h-12 w-12 overflow-hidden rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export const HorizontalCarousel = () => {
  const { sliders } = data;
  return (
    <div className="flex flex-col gap-2.5">
      {sliders.map((slider, index) => (
        <Slider
          key={`horizontal-carousel-slider-${index}`}
          slider={slider}
          direction={index % 2 == 0 ? 'RIGHT' : 'LEFT'}
        />
      ))}
    </div>
  );
};
