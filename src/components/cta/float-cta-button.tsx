import { Button } from '@/components/common/button';
import { StickyButtonContainer } from '@/components/container/sticky-button-container';
import { ASSET_SRC } from '@/entities/assets';
import { GOOGLE_FORM_LINK } from '@/entities/form';

export const FloatCtaButton = () => {
  return (
    <StickyButtonContainer>
      <a
        href={GOOGLE_FORM_LINK}
        target="_blank"
        className="flex w-fit items-center gap-1"
      >
        <Button
          size="lg"
          className="py-2.5 pr-4.5 pl-7 shadow-lg"
        >
          지금 바로 출시 알림 신청하기 <img src={ASSET_SRC.ARROW} />
        </Button>
      </a>
    </StickyButtonContainer>
  );
};
