import React from "react";
import { Route, Routes as RoutesWrapper } from "react-router-dom";

import { BookListPage } from "./pages/BookListPage";
import { BookDetailsPage } from "./pages/BookDetailsPage";

const Routes = () => {
  return (
    <RoutesWrapper>
      <Route exact path="/" element={<BookListPage />} />
      <Route path="/books/:id" element={<BookDetailsPage />} />
    </RoutesWrapper>
  );
};

export default Routes;
