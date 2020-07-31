import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { wordSessionStart, wordLangAdd } from "../actions";

import OpenLangApi from "../apis/openlang";

// views
import WordSearch from "./word/WordSearch";
import WordAdd from "./word/WordAdd";

class Word extends React.Component {
  // excuted on WordSearch.js
  _searchWord = (word) => {
    //console.log(`WordSearch with ${word}`);

    const langType = "en";

    OpenLangApi.get(`/word/${word}?lang=${langType}`).then(
      (res, err) => {
        if (res.data.result.word_en) {
          console.log(res.data);
          this.props.wordSessionStart(res.data);
        }
      }
    );
    // 에러 처리 필요함.
  };

  renderViews() {
    console.log(this.props.session);
    if (!this.props.session) {
      return <WordSearch submit={this._searchWord} />;
    }

    return <WordAdd data={this.props} />;
  }
  render() {
    return <div>{this.renderViews()}</div>;
  }
}

const mapStateToProps = ({ word }) => {
  return word;
};

export default connect(mapStateToProps, { wordSessionStart, wordLangAdd })(
  Word
);
