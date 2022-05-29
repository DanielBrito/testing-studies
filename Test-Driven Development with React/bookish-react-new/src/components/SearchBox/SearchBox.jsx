import React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import { clone, isEmpty } from "lodash";

export const SearchBox = ({ term, onSearch }) => {
  const protect = (event) => {
    const value = clone(event.target.value);
    if (!isEmpty(value.trim())) {
      return onSearch(event);
    }
  };

  return (
    <TextField
      fullWidth
      label="Search"
      value={term}
      onChange={protect}
      margin="normal"
      variant="outlined"
      data-cy="search-input"
      inputProps={{ "data-testid": "search-input" }}
    />
  );
};
