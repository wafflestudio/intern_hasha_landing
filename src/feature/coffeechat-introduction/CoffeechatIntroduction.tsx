import { HighlighText } from '@/components/text/highlight-text';
import { MainTitle } from '@/components/text/main-title';

export const CoffeechatIntroduction = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <MainTitle>
        <h3>부담스러운 지원서 대신</h3>
        <h3>
          <HighlighText className="w-16">커피챗</HighlighText>으로 간단하게
        </h3>
      </MainTitle>
      <h1>부담스러운 지원서 대신 커피챗으로 간단하게</h1>
    </div>
  );
};
