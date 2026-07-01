import { Star } from "lucide-react";
import type { Review } from "@/types";

interface ReviewsGridProps {
  reviews: Review[];
}

export default function ReviewsGrid({ reviews }: ReviewsGridProps) {
  return (
    <div className="grid grid-3">
      {reviews.map((r) => (
        <div key={r.name + r.meta} className="card review-card">
          <div className="stars">
            {Array.from({ length: r.stars }).map((_, i) => (
              <Star key={i} fill="currentColor" />
            ))}
          </div>
          <p className="quote">«{r.text}»</p>
          <div className="who">
            <span className="avatar">{r.name.charAt(0)}</span>
            <div>
              <b>{r.name}</b>
              <span>{r.meta}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
