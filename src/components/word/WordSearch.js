import React from "react";
import OpenLangApi from "../../apis/openlang";
import ErrorMsg from "../ErrorMsg";

class WordSearch extends React.Component {
  componentDidMount() {
    this.renderWordList();
  }

  state = {
    enWord: "",
  };

  handleChange = (e) => {
    this.setState({
      enWord: e.target.value,
    });
  };

  _onSubmit = () => {
    if (this.state.enWord) {
      this.props.submit(this.state.enWord);
    }
  };

  renderWordList = () => {
    OpenLangApi.get("/word/all/5").then((res) => {
      this.setState({
        wordData: res.data.result,
      });
    });
  };

  render() {
    return (
      <div className="word ui container">
        <div className="ui middle aligned raised very padded container segment">
          <h2 className="ui header">
            새로운 단어 추가 또는 다른 언어 추가하기
          </h2>
          <p>추가하거나 번역할 영어 단어를 입력해주세요.</p>
          <p></p>

          <div className="fluid ui icon input">
            <i className="search icon"></i>
            <input
              onChange={this.handleChange}
              value={this.state.enWord}
              type="text"
              placeholder="영어 단어 입력"
            />
          </div>
          <div onClick={this._onSubmit} className="fluid ui primary button">
            제출 및 탐색
          </div>
        </div>

        <h3 className="ui header">현재 등록되어 있는 단어 목록</h3>
        <div className="ui segment">
          <div className="ui relaxed divided list">
            {this.state.wordData ? (
              this.state.wordData.map((word, key) => (
                <div className="item" key={word.word_id}>
                  <div className="content">
                    <div className="header">{word.word_en}</div>
                    <p>{word.word_ko}</p>
                    <p>{word.word_ja}</p>
                  </div>
                </div>
              ))
            ) : (
              <ErrorMsg
                title="네트워크 오류"
                content="서버와 연결할 수 없음."
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default WordSearch;
