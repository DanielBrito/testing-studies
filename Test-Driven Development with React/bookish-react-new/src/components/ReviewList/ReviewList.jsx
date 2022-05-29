import React from "react";

import { Review } from "../Review";

export const ReviewList = ({ reviews = [] }) => {
  return (
    <div data-cy="reviews-container" data-testid="reviews-container">
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};
