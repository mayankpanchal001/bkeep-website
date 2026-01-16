import { services } from "@/lib/data/servicesData";
import { NextRequest, NextResponse } from "next/server";

// GET - Fetch all services or filter by slug
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (slug) {
      const service = services.find((s) => s.slug === slug);
      if (!service) {
        return NextResponse.json(
          { error: "Service not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(service);
    }

    // Return all services
    return NextResponse.json({ services });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
