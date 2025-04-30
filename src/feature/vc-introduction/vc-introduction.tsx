import { Description } from '@/components/text/description';
import { HighlighText } from '@/components/text/highlight-text';
import { MainTitle } from '@/components/text/main-title';
import { HorizontalCarousel } from '@/feature/vc-introduction/horizontal-carousel';
import data from '@/feature/vc-introduction/vc.json';
import { VcDescription } from '@/feature/vc-introduction/vc-description';

export const VcIntroduction = () => {
  const { vcData } = data;
  return (
    <div className="flex flex-col gap-20 py-25">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <MainTitle>
            <h3>
              <HighlighText className="w-43">검증된 스타트업</HighlighText>만
            </h3>
            <h3>엄선하였습니다.</h3>
          </MainTitle>
          <Description>
            유명 투자사로부터 사업성을 검증받은 초기 스타트업의 공고만을
            제공합니다. 성공확률이 높은 기업에서 다양한 경험을 쌓을 수 있어요.
          </Description>
        </div>
        <div className="flex flex-col gap-9">
          <div className="text-lg font-bold">
            <p>
              <b className="text-red">유니콘 스타트업</b>을 키운 유명 투자사들이
            </p>
            <p>투자한 기업만을 모았습니다.</p>
          </div>
          {vcData.map(({ name, src, alt, descriptions }) => (
            <VcDescription
              key={`vc-description-${alt}`}
              name={name}
              src={src}
              alt={alt}
              descriptions={descriptions}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-gray text-center">위 투자사가 투자한 대표 기업들</p>
        <HorizontalCarousel />
      </div>
    </div>
  );
};
