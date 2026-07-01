import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  phone?: string;
  serviceType?: string;
  area?: string;
  urgency?: string;
  notes?: string;
}

export async function POST(request: NextRequest) {
  const body: ContactPayload = await request.json();

  if (!body.name?.trim() || !body.phone?.trim() || !body.serviceType?.trim()) {
    return NextResponse.json(
      { ok: false, error: "نام، شماره تماس و نوع خدمت الزامی است." },
      { status: 400 }
    );
  }

  console.log("[contact] new service request:", body);

  return NextResponse.json({ ok: true });
}
