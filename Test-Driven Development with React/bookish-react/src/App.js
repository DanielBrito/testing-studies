import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import BookListContainer from "./BookList/BookListContainer";
import BookDetailContainer from "./BookDetail/BookDetailContainer";

const App = () => {
  return (
    <Container>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Routes>
        <Route exact path="/" element={<BookListContainer />} />
        <Route path="/books/:id" element={<BookDetailContainer />} />
      </Routes>
    </Container>
  );
};

export default App;
