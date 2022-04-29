import React from "react";
import { useParams } from "react-router-dom";

import { useRemoteService } from "../hooks/useRemoteService";
import BookDetail from "./BookDetail";

const BookDetailContainer = () => {
  const { id } = useParams();
  const { data } = useRemoteService(`http://localhost:8080/books/${id}`, {});

  return <BookDetail book={data} />;
};

export default BookDetailContainer;
