import { NextRequest, NextResponse } from 'next/server';
import { insightsData } from '../route';

// GET - Fetch a single insight by slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const insight = insightsData.find((item) => item.slug === slug);

    if (!insight) {
      return NextResponse.json(
        { error: 'Insight not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(insight);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch insight' },
      { status: 500 }
    );
  }
}
