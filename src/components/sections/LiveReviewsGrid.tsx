"use client";

import { useEffect, useState } from "react";
import ReviewsGrid from "@/components/sections/ReviewsGrid";
import type { Review } from "@/types";

interface ApiReview {
  id: string;
  name: string;
  city?: string;
  rating: number;
  text: string;
}

interface LiveReviewsGridProps {
  fallbackReviews: Review[];
}

export default function LiveReviewsGrid({
  fallbackReviews,
}: LiveReviewsGridProps) {
  const [reviews, setReviews] = useState(fallbackReviews);

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) return;

        const data: { reviews?: ApiReview[] } = await response.json();
        if (!data.reviews?.length) return;

        setReviews(
          data.reviews.map((review) => ({
            name: review.name,
            meta: review.city || "مشتری چاه‌یار",
            stars: review.rating,
            text: review.text,
          })),
        );
      } catch {
        // Static reviews remain visible if the database is unavailable.
      }
    }

    void loadReviews();
  }, []);

  return <ReviewsGrid reviews={reviews} />;
}
