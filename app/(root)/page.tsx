import StructuredData from "@/components/StructuredData";
import AboutSection from "@/components/homepage/AboutSection";
import HeroSection from "@/components/homepage/HeroSection";
import InsightSection from "@/components/homepage/InsightSection";

export default function Home() {
  return (
    <>
      <StructuredData />
      <main>
        <HeroSection />
        <AboutSection />
        <InsightSection />
      </main>
    </>
  );
}
