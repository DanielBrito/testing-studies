import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { BookDetail } from "../../components/BookDetail";

import * as actions from "../../redux/actions";

export const BookDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchABook(id));
  }, [dispatch, id]);

  const book = useSelector((state) => state.details);

  return <BookDetail book={book} />;
};
