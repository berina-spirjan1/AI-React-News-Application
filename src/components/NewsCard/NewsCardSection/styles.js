import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    height: "250px",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid white",
  },
  activeCard: {
    borderBottom: "10px solid #22289a",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 16px 8px 16px",
  },
});

export default useStyles;
