import React from "react";
import { Route, Switch } from "react-router-dom";

import { BookListPage } from "./pages/BookListPage";
import { BookDetailsPage } from "./pages/BookDetailsPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={BookListPage} />
      <Route path="/books/:id" component={BookDetailsPage} />
    </Switch>
  );
};

export default Routes;
