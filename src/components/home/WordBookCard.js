import React from "react";
import Paper from "@material-ui/core/Paper";
import WordBookType from "../WordBookType";
import Avatar from "@material-ui/core/Avatar";
import "../../styles/open-lang.css";
import "../../styles/wordbookcard.css";

class WordBookCard extends React.Component {
  render() {
    return (
      <Paper className="card" elevation={5}>
        <div className="map">
          <div className="tag-entry">
            <WordBookType type={this.props.type} />
          </div>
          <p className="text name">hsk 4급 1100개 단어</p>
          
          <p className="text info">1,082개의 용어</p>
        </div>

        <div className="user">
          <Avatar src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/83D7/production/_111515733_gettyimages-1208779325.jpg" />
          <p className="text small">kwonkiseok02</p>
        </div>
      </Paper>
    );
  }
}

export default WordBookCard;
