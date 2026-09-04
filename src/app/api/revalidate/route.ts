import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

type WebhookPayload = {
  _type?: string;
};

/**
 * Static routes that render each document type. Detail routes
 * (/insights/[slug], /events/[slug], /case-studies/[slug],
 * /about/team/[slug]) are server-rendered per request, so they are
 * already fresh and need no purge.
 */
const pathsByType: Record<string, string[]> = {
  teamMember: ['/about'],
  caseStudy: [
    '/',
    '/case-studies',
    '/services/communications',
    '/services/corporate',
    '/services/policy',
    '/services/technology',
  ],
  caseStudyCategory: ['/case-studies'],
  insight: ['/', '/insights'],
  insightCategory: ['/insights'],
  event: ['/events'],
  eventCategory: ['/events'],
  partnerLogo: ['/'],
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as WebhookPayload;

    if (!body?._type) {
      return NextResponse.json({ message: 'Bad request' }, { status: 400 });
    }

    const paths = pathsByType[body._type] ?? [];
    paths.forEach((path) => revalidatePath(path));

    return NextResponse.json({ revalidated: paths, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: (err as Error).message }, { status: 500 });
  }
}
