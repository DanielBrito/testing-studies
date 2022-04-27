import React from "react";
import { Typography } from "@material-ui/core";
import BookListContainer from "./components/BookListContainer";

const App = () => {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>

      <BookListContainer />
    </div>
  );
};

export default App;
