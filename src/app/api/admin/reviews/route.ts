import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDatabase } from "@/lib/mongodb";

const validStatuses = ["pending", "approved", "rejected"] as const;
type ReviewStatus = (typeof validStatuses)[number];

function isAuthorized(request: NextRequest) {
  const key = process.env.ADMIN_API_KEY;
  return Boolean(key && request.headers.get("x-admin-key") === key);
}

function unauthorized() {
  return NextResponse.json(
    { ok: false, error: "دسترسی غیرمجاز است." },
    { status: 401 },
  );
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) return unauthorized();

  try {
    const database = await getDatabase();
    const reviews = await database
      .collection("reviews")
      .find()
      .sort({ createdAt: -1 })
      .toArray();
    return NextResponse.json({
      ok: true,
      reviews: reviews.map((review) => ({
        ...review,
        id: review._id.toString(),
        _id: undefined,
      })),
    });
  } catch (error) {
    console.error("Unable to load admin reviews", error);
    return NextResponse.json(
      { ok: false, error: "دریافت نظرات ممکن نیست." },
      { status: 503 },
    );
  }
}

export async function PATCH(request: NextRequest) {
  if (!isAuthorized(request)) return unauthorized();

  let body: { id?: unknown; status?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "اطلاعات ارسالی معتبر نیست." },
      { status: 400 },
    );
  }

  if (
    typeof body.id !== "string" ||
    !ObjectId.isValid(body.id) ||
    !validStatuses.includes(body.status as ReviewStatus)
  ) {
    return NextResponse.json(
      { ok: false, error: "شناسه یا وضعیت نظر معتبر نیست." },
      { status: 400 },
    );
  }

  try {
    const database = await getDatabase();
    const result = await database
      .collection("reviews")
      .updateOne(
        { _id: new ObjectId(body.id) },
        { $set: { status: body.status, moderatedAt: new Date() } },
      );

    if (!result.matchedCount) {
      return NextResponse.json(
        { ok: false, error: "نظر پیدا نشد." },
        { status: 404 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unable to update review", error);
    return NextResponse.json(
      { ok: false, error: "به‌روزرسانی نظر ممکن نیست." },
      { status: 503 },
    );
  }
}
