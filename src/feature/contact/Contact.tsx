import { Button } from '@/components/common/button';
import { Description } from '@/components/text/description';
import { HighlightText } from '@/components/text/highlight-text';
import { MainTitle } from '@/components/text/main-title';
import { GOOGLE_FORM_LINK } from '@/entities/form';

export const Contact = () => {
  return (
    <div className="mx-6 py-15">
      <section className="flex h-80 flex-col justify-between rounded-xl bg-white px-6 py-8 shadow-md">
        <div className="flex flex-col gap-4">
          <MainTitle className="text-left">
            <h2>
              <HighlightText className="w-27.5">이메일 하나</HighlightText>면
            </h2>
            <h2>가장 빠르게 인턴하샤를</h2>
            <h2>만날 수 있어요!</h2>
          </MainTitle>
          <Description>
            입력하신 이메일로 곧 열릴 오픈 베타 테스트 알림을 전달해드려요.
          </Description>
        </div>
        <div className="mx-auto">
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            className="flex items-center gap-1"
          >
            <Button>지금 바로 출시 알림 신청하기</Button>
          </a>
        </div>
      </section>
    </div>
  );
};
