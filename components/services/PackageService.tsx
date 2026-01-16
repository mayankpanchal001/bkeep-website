"use client";

import { additionalServices } from "@/lib/data/servicesData";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const PackageService = () => {
  return (
    <section className="additional-services-section py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Additional Services
            </h2>
            <p className="text-secondary text-lg">
              We also offer specialized services to meet your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-neutral rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary">{service.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-accent font-semibold text-sm">
                  Learn More
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageService;
