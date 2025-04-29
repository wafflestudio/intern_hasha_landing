import { ASSET_SRC } from '@/entities/assets';

export const NavigationBar = () => {
  return (
    <div className="t-0 l-0 fixed z-10 flex h-15 w-screen items-center justify-center bg-linear-(--white-gradient)">
      <img
        src={ASSET_SRC.LOGO}
        className="w-23"
      />
    </div>
  );
};
