import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import SelectedWorksSection from "@/components/home/SelectedWorksSection";
import BiographySection from "@/components/home/BiographySection";
import PressSection from "@/components/home/PressSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <SelectedWorksSection />
      <BiographySection />
      <PressSection />
    </>
  );
}
