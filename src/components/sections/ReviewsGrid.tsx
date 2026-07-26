import { Star } from "lucide-react";
import type { Review } from "@/types";

interface ReviewsGridProps {
    reviews: Review[];
}

export default function ReviewsGrid({ reviews }: ReviewsGridProps) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
                <article
                    key={review.name + review.meta}
                    className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-transparent hover:shadow-xl"
                >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-3">
                            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-blue-50 text-lg font-extrabold text-blue-700">
                                {review.name.charAt(0)}
                            </span>
                            <div>
                                <b className="block text-sm text-slate-800">{review.name}</b>
                                <span className="block text-sm text-slate-500">
                                    {review.meta}
                                </span>
                            </div>
                        </div>
                        <div
                            className="flex shrink-0 gap-1 text-amber-500"
                            aria-label={`${review.stars} ستاره از ۵`}
                        >
                            {Array.from({ length: review.stars }).map((_, index) => (
                                <Star key={index} className="size-4 fill-current" />
                            ))}
                        </div>
                    </div>
                    <p className="m-0 flex-1 text-slate-800">«{review.text}»</p>
                </article>
            ))}
        </div>
    );
}
