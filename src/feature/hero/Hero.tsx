import { Button } from '@/components/common/button';
import { HighlightText } from '@/components/text/highlight-text';
import { ASSET_SRC } from '@/entities/assets';

export const Hero = () => {
  return (
    <div className="flex flex-col gap-9 py-25">
      <div className="flex flex-col gap-12 px-2.5">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-3xl font-bold">
            <h1>이번 여름 인턴</h1>
            <h1>
              <HighlightText className="w-25">5분만에</HighlightText> 구하세요!
            </h1>
          </div>
          <div className="text-gray font-light">
            <p>아직도 여러 채용 플랫폼 돌아다니시나요?</p>
            <p>
              인턴하샤에서는 <b className="font-bold">유명 투자사</b>로부터
              투자받은
            </p>
            <p>
              스타트업 인턴 기회를 간단한 <b className="font-bold">커피챗</b>
              으로 잡을 수 있어요.
            </p>
          </div>
        </div>
        <div className="m-auto">
          <Button size="lg">
            지금 바로 출시 알림 신청하기 <img src={ASSET_SRC.ARROW} />
          </Button>
        </div>
      </div>
      <div className="relative h-90 w-full">
        <img
          src={ASSET_SRC.JOB_CARD}
          className="animate-reverse-bounce absolute top-0 left-0 w-[240px]"
        />
        <img
          src={ASSET_SRC.COFFECHAT_PAGE}
          className="absolute top-25 right-0 w-[240px] animate-bounce"
        />
      </div>
    </div>
  );
};
