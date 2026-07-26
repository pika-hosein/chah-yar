import { NextRequest, NextResponse } from "next/server";

interface ReviewPayload {
  name?: string;
  city?: string;
  rating?: string;
  text?: string;
}

export async function POST(request: NextRequest) {
  const body: ReviewPayload = await request.json();

  if (!body.name?.trim() || !body.rating?.trim() || !body.text?.trim()) {
    return NextResponse.json(
      { ok: false, error: "نام، امتیاز و متن نظر الزامی است." },
      { status: 400 },
    );
  }

  console.log("[reviews] new review submitted:", body);

  return NextResponse.json({ ok: true });
}
