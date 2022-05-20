import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container/Container";

import Routes from "./Routes";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Routes />
    </Container>
  );
};

export default App;
