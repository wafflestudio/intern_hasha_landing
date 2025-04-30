import { Description } from '@/components/text/description';
import { HighlighText } from '@/components/text/highlight-text';
import { MainTitle } from '@/components/text/main-title';
import data from '@/feature/coffeechat-introduction/screen_clip.json';
import { VideoClip } from '@/feature/coffeechat-introduction/video-clip';

export const CoffeechatIntroduction = () => {
  const { mockupScreenData } = data;
  return (
    <div className="flex flex-col gap-12 py-25">
      <div className="flex flex-col gap-6">
        <MainTitle>
          <h3>부담스러운 지원서 대신</h3>
          <h3>
            <HighlighText className="w-16">커피챗</HighlighText>으로 간단하게
          </h3>
        </MainTitle>
        <Description>
          <p>바로 이력서를 보내기 부담스러우신가요?</p>
          <p>
            인턴하샤에서는 내가 원하는 스타트업 인턴 공고를 찾았다면 기업에
            간단하게 커피챗을 요청할 수 있어요.
          </p>
        </Description>
      </div>
      <div className="flex flex-col gap-6">
        {mockupScreenData.map(({ src, thumbnailSrc, description }, index) => (
          <VideoClip
            key={`mockup-video-${index}`}
            src={src}
            thumbnailSrc={thumbnailSrc}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};
