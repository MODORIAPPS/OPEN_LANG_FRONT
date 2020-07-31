import React from "react";
import WordBookCard from "./WordBookCard";
import "../../styles/LatestList.scss";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const LatestList = (props) => {
  return (
    <div className="LatestList">
      <div className="LatestList-top">
        <p className="LatestList-heading">최근 활동</p>
        <div className="LatestList-tool">
          <p className="LatestList-highlight">모든 세트 표시</p>
          <NavigateNextIcon />
        </div>
      </div>
      <div className="LatestList-listview">
        <WordBookCard type={0} />
        <WordBookCard type={1} />
        <WordBookCard />
        <WordBookCard />
      </div>
    </div>
  );
};

export default LatestList;
