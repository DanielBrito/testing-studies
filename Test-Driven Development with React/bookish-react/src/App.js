import React from "react";
import { Typography } from "@material-ui/core";
import BookList from "./BookList";

function App() {
  const books = [{ name: "Refactoring" }, { name: "Domain-driven design" }];

  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>

      <BookList books={books} />
    </div>
  );
}

export default App;
