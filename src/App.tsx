import { Analytics } from '@vercel/analytics/react';

import { ContentLayout } from '@/components/common/content-layout';
import { NavigationBar } from '@/components/common/navigation-bar';
import { FloatCtaButton } from '@/components/cta/float-cta-button';
import { Banner } from '@/feature/banner';
import { CoffeechatIntroduction } from '@/feature/coffeechat-introduction';
import { Contact } from '@/feature/contact';
import { Hero } from '@/feature/hero';
import { VcIntroduction } from '@/feature/vc-introduction/vc-introduction';

function App() {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <div className="pt-15">
        <ContentLayout>
          <Hero />
        </ContentLayout>
        <ContentLayout className="bg-linear-(--pink-gradient)">
          <Banner />
        </ContentLayout>
        <ContentLayout>
          <VcIntroduction />
        </ContentLayout>
        <ContentLayout>
          <CoffeechatIntroduction />
        </ContentLayout>
        <ContentLayout className="bg-light-pink">
          <Contact />
        </ContentLayout>
      </div>
      <FloatCtaButton />
      <Analytics />
    </div>
  );
}

export default App;
