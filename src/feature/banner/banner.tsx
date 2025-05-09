import { VerticalCarousel } from '@/feature/banner/vertical-carousel';

export const Banner = () => {
  return (
    <div className="flex h-full w-full">
      <div className="xs:text-[1rem] flex items-center gap-2 py-4 text-sm font-bold md:gap-4 md:text-lg">
        <h3>제 2의</h3>
        <VerticalCarousel />
        <h3>에서 근무하세요</h3>
      </div>
    </div>
  );
};
