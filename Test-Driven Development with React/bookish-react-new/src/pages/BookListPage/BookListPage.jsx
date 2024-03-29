import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid/Grid";
import { createSelector } from "reselect";

import { BookList } from "../../components/BookList";
import { SearchBox } from "../../components/SearchBox";

import * as actions from "../../redux/actions/actions";

const bookListSelector = createSelector(
  [
    (state) => state.books,
    (state) => state.loading,
    (state) => state.errors["FETCH_BOOKS"],
  ],
  (books, loading, error) => ({ books, loading, error })
);

export const BookListPage = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchBooks(term));
  }, [dispatch, term]);

  const { books, loading, error } = useSelector(bookListSelector);

  const onSearch = (event) => setTerm(event.target.value);

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchBox term={term} onSearch={onSearch} />
        </Grid>
        <Grid item xs={12}>
          <BookList books={books} loading={loading} error={error} />
        </Grid>
      </Grid>
    </Fragment>
  );
};
