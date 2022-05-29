import React from "react";

import { ReviewList } from "../ReviewList";
import { ReviewForm } from "../ReviewForm";

export const BookDetail = ({ book }) => {
  return (
    <div>
      <h2 data-cy="book-title" data-testid="book-title">
        {book.name}
      </h2>
      <p data-testid="book-description">{book.description}</p>

      <ReviewForm bookId={book.id} />

      {book.reviews && <ReviewList reviews={book.reviews} />}
    </div>
  );
};
