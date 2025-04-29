import { NavigationBar } from '@/components/common/navigation-bar';
import { Banner } from '@/feature/banner';
import { CoffeechatIntroduction } from '@/feature/coffeechat-introduction';
import { Contact } from '@/feature/contact';
import { Hero } from '@/feature/hero';
import { VcIntroduction } from '@/feature/vc-introduction/VcIntroduction';

function App() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Banner />
      <VcIntroduction />
      <CoffeechatIntroduction />
      <Contact />
    </div>
  );
}

export default App;
