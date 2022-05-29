import React, { useState } from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid/Grid";
import { makeStyles } from "@material-ui/core";

import * as actions from "../../redux/actions";

const useStyles = makeStyles(() => ({
  root: {
    margin: "1rem 0",
  },
}));

export const ReviewForm = ({ bookId }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    dispatch(actions.saveReview(bookId, { bookId, name, content }));
  };

  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.root}
      data-testid="form"
    >
      <Grid container>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-cy="name-input"
            data-testid="name-input"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            name="content"
            label="Content"
            margin="normal"
            variant="outlined"
            multiline
            maxRows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            data-cy="content-input"
            inputProps={{ "data-testid": "review-input" }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            name="submit"
            onClick={onSubmit}
            data-cy="review-button"
            data-testid="review-button"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
