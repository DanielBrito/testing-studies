import React from "react";
import { Typography } from "@material-ui/core";

import BookList from "./BookList";
import { useRemoteService } from "../hooks/hooks";

const BookListContainer = () => {
  const { data, loading, error } = useRemoteService([]);

  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookList books={data} loading={loading} error={error} />
    </>
  );
};

export default BookListContainer;
