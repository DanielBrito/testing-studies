import React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import clone from "lodash.clone";
import isEmpty from "lodash.isempty";

const SearchBox = ({ term, onSearch }) => {
  const protect = (event) => {
    const value = clone(event.target.value);

    if (!isEmpty(value.trim())) {
      return onSearch(event);
    }
  };
  return (
    <TextField
      label="Search"
      value={term}
      data-test="search"
      onChange={protect}
      margin="normal"
      variant="outlined"
      inputProps={{ "data-testid": "search" }}
    />
  );
};

export default SearchBox;
