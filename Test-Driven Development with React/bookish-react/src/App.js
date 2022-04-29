import React from "react";
import { Route, Routes } from "react-router-dom";

import BookListContainer from "./BookList/BookListContainer";
import BookDetailContainer from "./BookDetail/BookDetailContainer";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<BookListContainer />} />
      <Route path="/books/:id" element={<BookDetailContainer />} />
    </Routes>
  );
};

export default App;
