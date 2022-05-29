import React, { useState } from "react";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import { useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary/AccordionSummary";
import Accordion from "@material-ui/core/Accordion/Accordion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid/Grid";

import * as actions from "../../redux/actions";

export const Review = ({ review }) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(review.content);

  const dispatch = useDispatch();

  const clickHandler = (e) => {
    if (editing) {
      dispatch(actions.updateReview(Number(review.id), { ...review, content }));
    }

    setEditing(!editing);
  };

  return (
    <div className="review">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{review.name}</Typography>
          <Typography>{review.date}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12}>
              {!editing ? (
                <Typography>{review.content}</Typography>
              ) : (
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
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                name="submit"
                onClick={clickHandler}
              >
                {!editing ? "Edit" : "Submit"}
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
