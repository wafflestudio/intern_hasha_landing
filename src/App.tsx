import { ContentLayout } from '@/components/common/content-layout';
import { NavigationBar } from '@/components/common/navigation-bar';
import { Banner } from '@/feature/banner';
import { CoffeechatIntroduction } from '@/feature/coffeechat-introduction';
import { Contact } from '@/feature/contact';
import { Hero } from '@/feature/hero';
import { VcIntroduction } from '@/feature/vc-introduction/vc-introduction';

function App() {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll pt-15">
        <ContentLayout>
          <Hero />
        </ContentLayout>
        <ContentLayout className="snap-center bg-linear-(--pink-gradient)">
          <Banner />
        </ContentLayout>
        <ContentLayout>
          <VcIntroduction />
        </ContentLayout>
        <ContentLayout>
          <CoffeechatIntroduction />
        </ContentLayout>
        <ContentLayout className="bg-light-pink snap-align-end">
          <Contact />
        </ContentLayout>
      </div>
    </div>
  );
}

export default App;
