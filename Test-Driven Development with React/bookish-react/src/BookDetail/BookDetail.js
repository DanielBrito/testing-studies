import React from "react";

const BookDetail = ({ book }) => {
  return (
    <div className="detail">
      <h2 className="book-title" data-testid="book-title">
        {book.name}
      </h2>
      <p className="book-description" data-testid="book-description">
        {book.description}
      </p>
    </div>
  );
};

export default BookDetail;
