import React from "react";
import NewsCardSection from "./NewsCardSection";
import { Grid, Typography, Grow } from "@material-ui/core";
import useStyles from "./styles";
import { informationCardsData } from "./newsCardHelpers";

const NewsCard = ({ articles }) => {
  console.log("articles", articles);
  const classes = useStyles();

  if (!articles?.length) {
    return (
      <Grow in>
        <Grid
          container
          alignItems="strech"
          spacing={3}
          className={classes.container}
        >
          {informationCardsData.map((informationCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.informationCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: informationCard.color }}
              >
                <Typography variant="h5">{informationCard.title}</Typography>
                {informationCard.info && (
                  <Typography variant="h6">
                    <strong>{informationCard.title.split(" ")[2]}</strong>
                    <br />
                    {informationCard.info}
                  </Typography>
                )}
                <Typography variant="h6">
                  Try saying: <br />
                  <i>{informationCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

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
            <NewsCardSection article={article} index={index} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCard;
