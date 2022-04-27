import React from "react";

const BookList = ({ books, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <div data-test="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <h2 className="title">{book.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default BookList;
