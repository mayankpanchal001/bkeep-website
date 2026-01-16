import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/data/servicesData";
import ConnectService from "@/components/services/ConnectService";
import ExpertiseService from "@/components/services/ExpertiseService";
import FaqService from "@/components/services/FaqService";
import ProcessService from "@/components/services/ProcessService";
import ResultService from "@/components/services/ResultService";
import TechnologyService from "@/components/services/TechnologyService";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceBenefits from "@/components/services/ServiceBenefits";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Services | BKEEP`,
    description: service.description,
    keywords: `${service.title}, dental bookkeeping, financial services, ${service.features?.join(", ")}`,
    openGraph: {
      title: `${service.title} Services | BKEEP`,
      description: service.description,
      type: "website",
    },
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Map service to icon name for serialization
  const serviceIconMap: Record<string, string> = {
    assurance: "Shield",
    tax: "FileText",
    advisory: "Lightbulb",
    "monthly-bookkeeping": "Calculator",
    "payroll-services": "Briefcase",
    "financial-analysis": "BarChart3",
    "bookkeeping-cleanup": "RefreshCw",
    "cra-audit-support": "FileCheck",
  };

  const iconName = serviceIconMap[service.slug] || "Shield";

  // Serialize service data for client components (excluding icon component)
  const serviceData = {
    title: service.title,
    description: service.description,
    slug: service.slug,
    number: service.number,
    features: service.features,
    iconName: iconName,
  };

  return (
    <main className="main min-h-dvh" id="service-detail-page">
      <ServiceHero service={serviceData} />
      <ServiceFeatures service={serviceData} />
      <ServiceBenefits service={serviceData} />
      <ProcessService />
      <ExpertiseService />
      <TechnologyService />
      <ResultService />
      <FaqService />
      <ConnectService />
    </main>
  );
}
