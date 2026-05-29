import { NextResponse } from 'next/server';

const COMPANY_ID = 510;

export async function GET() {
  try {
    const res = await fetch(
      `https://ninajojer.seamlesshiring.com/v2/jobs/job-list?company_id=${COMPANY_ID}&per_page=20&page=1`,
      { headers: { Accept: 'application/json' }, next: { revalidate: 300 } }
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ status: 'error', data: { jobs: { data: [] } } }, { status: 500 });
  }
}
