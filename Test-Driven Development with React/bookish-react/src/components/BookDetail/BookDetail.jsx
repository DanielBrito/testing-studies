import React from "react";

import { ReviewList } from "../ReviewList";
import { ReviewForm } from "../ReviewForm";

export const BookDetail = ({ book }) => {
  return (
    <div className="detail">
      <h2 className="book-title" data-testid="book-title">
        {book.name}
      </h2>
      <p className="book-description" data-testid="book-description">
        {book.description}
      </p>

      <ReviewForm bookId={book.id} />

      {book.reviews && <ReviewList reviews={book.reviews} />}
    </div>
  );
};
