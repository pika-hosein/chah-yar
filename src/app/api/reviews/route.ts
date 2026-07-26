import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

interface ReviewPayload {
  name?: unknown;
  city?: unknown;
  rating?: unknown;
  text?: unknown;
}

const MAX_NAME_LENGTH = 80;
const MAX_CITY_LENGTH = 100;
const MAX_TEXT_LENGTH = 1500;

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function GET() {
  try {
    const database = await getDatabase();
    const reviews = await database
      .collection("reviews")
      .find({ status: "approved" })
      .sort({ createdAt: -1 })
      .project({ name: 1, city: 1, rating: 1, text: 1, createdAt: 1 })
      .toArray();

    return NextResponse.json({
      ok: true,
      reviews: reviews.map((review) => ({
        id: review._id.toString(),
        name: review.name,
        city: review.city,
        rating: review.rating,
        text: review.text,
        createdAt: review.createdAt,
      })),
    });
  } catch (error) {
    console.error("Unable to load reviews", error);
    return NextResponse.json(
      { ok: false, error: "دریافت نظرات در حال حاضر ممکن نیست." },
      { status: 503 },
    );
  }
}

export async function POST(request: NextRequest) {
  let body: ReviewPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "اطلاعات ارسالی معتبر نیست." },
      { status: 400 },
    );
  }

  const name = asText(body.name);
  const city = asText(body.city);
  const text = asText(body.text);
  const rating = Number(body.rating);

  if (!name || !text || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json(
      { ok: false, error: "نام، امتیاز معتبر و متن نظر الزامی است." },
      { status: 400 },
    );
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    city.length > MAX_CITY_LENGTH ||
    text.length > MAX_TEXT_LENGTH
  ) {
    return NextResponse.json(
      { ok: false, error: "یکی از فیلدها بیش از حد مجاز طول دارد." },
      { status: 400 },
    );
  }

  try {
    const database = await getDatabase();
    await database.collection("reviews").insertOne({
      name,
      city,
      rating,
      text,
      status: "pending",
      createdAt: new Date(),
    });

    return NextResponse.json(
      { ok: true, message: "نظر شما برای بررسی ثبت شد." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Unable to save review", error);
    return NextResponse.json(
      { ok: false, error: "ثبت نظر در حال حاضر ممکن نیست." },
      { status: 503 },
    );
  }
}
