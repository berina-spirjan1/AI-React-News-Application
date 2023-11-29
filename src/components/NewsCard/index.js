import React from "react";
import NewsCardSection from "./NewsCardSection";
import { Grid, Typography, Grow } from "@material-ui/core";
import useStyles from "./styles";

const NewsCard = ({ articles }) => {
  console.log("articles", articles);
  const classes = useStyles();

  return (
    <Grow in>
      <Grid
        container
        alignItems="strech"
        spacing={3}
        className={classes.container}
      >
        {articles.map((article, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex" }}
            key={`${article.title}_${index}`}
          >
            <NewsCardSection article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCard;
