import React from "react";
import { Typography } from "@material-ui/core";

import BookList from "./BookList";
import { useRemoteService } from "../hooks/useRemoteService";

const BookListContainer = () => {
  const { data, loading, error } = useRemoteService(
    "http://localhost:8080/books",
    []
  );

  const sortedBooks = data.sort((a, b) => a.id - b.id);

  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookList books={sortedBooks} loading={loading} error={error} />
    </>
  );
};

export default BookListContainer;
