import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memoriesImage from "./images/memoriesImage.png";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        {/* Any textual element H2 P or anything but gives it a nice font */}
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
          <img className={classes.image} src={memoriesImage} alt="memories" height="60"></img>
        </Typography>
      </AppBar>
      {/* Grow provides simple animation, property of in */}
      <Grow in>
        <Container>
          {/* Grid of type container */}
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            {/* Add two different grid items within grid container */}
            {/* Full width on extra small devices */}
            {/* On small or medium devices will take 7/12 spaces */}
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
