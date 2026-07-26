import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

interface ContactPayload {
  name?: unknown;
  phone?: unknown;
  serviceType?: unknown;
  area?: unknown;
  urgency?: unknown;
  notes?: unknown;
}

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "اطلاعات ارسالی معتبر نیست." },
      { status: 400 },
    );
  }

  const name = asText(body.name);
  const phone = asText(body.phone);
  const serviceType = asText(body.serviceType);
  const area = asText(body.area);
  const urgency = asText(body.urgency) || "عادی";
  const notes = asText(body.notes);

  if (!name || !phone || !serviceType) {
    return NextResponse.json(
      { ok: false, error: "نام، شماره تماس و نوع خدمت الزامی است." },
      { status: 400 },
    );
  }

  if (
    name.length > 80 ||
    phone.length > 30 ||
    serviceType.length > 100 ||
    area.length > 100 ||
    notes.length > 2000
  ) {
    return NextResponse.json(
      { ok: false, error: "یکی از فیلدها بیش از حد مجاز طول دارد." },
      { status: 400 },
    );
  }

  try {
    const database = await getDatabase();
    await database.collection("contactRequests").insertOne({
      name,
      phone,
      serviceType,
      area,
      urgency,
      notes,
      status: "new",
      createdAt: new Date(),
    });

    return NextResponse.json(
      { ok: true, message: "درخواست شما ثبت شد." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Unable to save contact request", error);
    return NextResponse.json(
      { ok: false, error: "ثبت درخواست در حال حاضر ممکن نیست." },
      { status: 503 },
    );
  }
}
