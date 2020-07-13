import React from "react";
import "../../styles/open-lang.css";
import "../../styles/card-item.css";
import Paper from '@material-ui/core/Paper';


// CardList에 의해 제한받는다.
const CardItem = (props) => {
  const testImg = "https://o.quizlet.com/h20RRyi1-Tq8c6H2MVWeFQ_m.jpg";
  const title = "야생동물";
  const wordCount = 17;
  const user_name = "kiyomiet";
  return (
    <Paper elevation={5} className="card-item">
      <div className="overlay">
        <img alt="item" src={testImg}></img>
        <div className="info">
          <p className="text small">{wordCount}용어</p>
          <div className="divider vertical"></div>
          <p className="text hightlight middle">{user_name}</p>
        </div>
        <p>{title}</p>
      </div>
    </Paper>
  );
};

export default CardItem;
