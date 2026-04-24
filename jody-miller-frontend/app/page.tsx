import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import SelectedWorksSection from "@/components/home/SelectedWorksSection";
import BiographySection from "@/components/home/BiographySection";
import PressSection from "@/components/home/PressSection";
import { fetchSelectedPieces } from "@/lib/strapi";
import { selectedPieces as fallbackPieces } from "@/lib/mock-data";

export default async function HomePage() {
  const pieces = await fetchSelectedPieces().catch(() => fallbackPieces);

  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <SelectedWorksSection pieces={pieces} />
      <BiographySection />
      <PressSection />
    </>
  );
}
