import { ASSET_SRC } from '@/entities/assets';

export const NavigationBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="t-0 l-0 fixed z-10 flex h-15 w-screen items-center justify-center bg-linear-(--white-gradient)">
      <img
        src={ASSET_SRC.LOGO}
        className="w-23"
        onClick={scrollToTop}
      />
    </div>
  );
};
