import React from "react";
import { Route, Routes } from "react-router-dom";

import BookListContainer from "./components/BookListContainer";
import BookDetailContainer from "./components/BookDetailContainer";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<BookListContainer />} />
      <Route path="/books/:id" element={<BookDetailContainer />} />
    </Routes>
  );
};

export default App;
