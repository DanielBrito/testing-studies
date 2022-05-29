import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  name: {
    maxHeight: 30,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  description: {
    display: "box",
    lineClamp: 2,
    boxOrient: "vertical",
    overflow: "hidden",
  },
}));

export const BookList = ({ loading, error, books }) => {
  const classes = useStyles();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  const sortedBooks = [...books].sort((a, b) => a.id - b.id);

  return (
    <div data-cy="book-list" className={classes.root}>
      <Grid container spacing={3}>
        {sortedBooks.map((book) => (
          <Grid item key={book.id} data-cy="book-item">
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.name}
                    data-testid="book-title"
                    data-cy="book-title"
                  >
                    {book.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.description}
                    data-testid="book-description"
                  >
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to={`/books/${book.id}`}>View Details</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
