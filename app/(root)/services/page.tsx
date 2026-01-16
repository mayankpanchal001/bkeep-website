import ConnectService from "@/components/services/ConnectService";
import CoreService from "@/components/services/CoreService";
import HeroService from "@/components/services/HeroService";
import PackageService from "@/components/services/PackageService";
import ServicesList from "@/components/services/ServicesList";
import FaqService from "../../../components/services/FaqService";
import ProcessService from "../../../components/services/ProcessService";
import ResultService from "../../../components/services/ResultService";
import TechnologyService from "../../../components/services/TechnologyService";

export default function Services() {
  return (
    <main className="main min-h-dvh" id="services-page">
      <HeroService />
      <ServicesList />
      <CoreService />
      <ProcessService />
      <PackageService />
      <TechnologyService />
      <ResultService />
      <FaqService />
      <ConnectService />
    </main>
  );
}
