import React from "react";
import WordBookCard from "./WordBookCard";
import "../../styles/latest-list.css";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: 1000,
    height: 500,
  },
}));

const LatestList = (props) => {
  const classes = useStyles();
  return (
    <div className="latest-list">
      <div className="top">
        <p className="text name">최근 활동</p>
        <p className="text highlight">모든 세트 표시</p>
      </div>
      <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList}>
          <GridList>
            <WordBookCard type={0} />
          </GridList>
          <GridList>
            <WordBookCard type={1} />
          </GridList>
          <GridList>
            <WordBookCard />
          </GridList>
          <GridList>
            <WordBookCard />
          </GridList>
        </GridList>
      </div>
    </div>
  );
};

export default LatestList;
