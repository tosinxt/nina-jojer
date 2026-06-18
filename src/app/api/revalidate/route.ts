import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

type WebhookPayload = {
  _type?: string;
  slug?: { current?: string };
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as WebhookPayload;

    if (!body?._type) {
      return NextResponse.json({ message: 'Bad request' }, { status: 400 });
    }

    revalidatePath('/events');
    if (body.slug?.current) {
      revalidatePath(`/events/${body.slug.current}`);
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: (err as Error).message }, { status: 500 });
  }
}
