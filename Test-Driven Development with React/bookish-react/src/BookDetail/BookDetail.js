import React from "react";

const getDescriptionFor = (book) => {
  return book.description ? book.description : book.name;
};

const BookDetail = ({ book }) => {
  return (
    <div className="detail">
      <h2 className="book-title" data-testid="book-title">
        {book.name}
      </h2>
      <p className="book-description" data-testid="book-description">
        {getDescriptionFor(book)}
      </p>
    </div>
  );
};

export default BookDetail;
