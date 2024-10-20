import HeaderSection from "./component/Header";
import HeroSection from "./component/Hero";
import AboutSection from "./component/About";
import LatestSection from "./component/Latest";
import FooterSection from "./component/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeaderSection />
      <HeroSection />

      <div className="py-44">
        <AboutSection />
      </div>

      <LatestSection />
      <FooterSection />
    </div>
  );
}
