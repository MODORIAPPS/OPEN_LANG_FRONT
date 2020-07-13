import React from "react";
import OpenLangApi from "../../apis/openlang";

class WordAdd extends React.Component {
  componentDidMount() {
    // call only word by word_id
    // sql join 에서 막힘.
  }

  _koHandler = (e) => {
    this.setState({
      ko_word: e.target.value,
    });
  };

  _jaHandler = (e) => {
    this.setState({
      ja_word: e.target.value,
    });
  };

  state = {
    ko_input: true,
    ja_input: true,
    ko_word: "",
    ja_word: "",
  };

  _submit = () => {
    // POST
    OpenLangApi.post("");
  };

  renderView() {
    if (this.props.data.isExist) {
      return (
        <div>
          {addAnotherLang(this.props.data, this._koHandler, this._jaHandler)}
        </div>
      );
    } else {
      return (
        <div>
          {addNewWord(this.props.data, this._koHandler, this._jaHandler)}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="word-add ui container">
        <div className="ui middle aligned raised very padded container segment">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

// 이미 있는 단어의 번역 추가
const addAnotherLang = async (data, _koHandler, _jaHandler) => {
  const koWord = check(data.word_id, "ko");
  const jaWord = check(data.word_id, "ja");

  return (
    <div className="ui segment">
      <div className="ui two column very relaxed grid">
        <div className="column">
          <div>
            <p>입력하신 단어가 이미 등록되어 있으므로</p>
            <div className="ui header">
              {data.word_en}의 "다른 언어"를 추가합니다.
            </div>

            <div className="ui icon input">
              <i className="search icon"></i>
              <input
                onChange={_koHandler}
                type="text"
                placeholder="한국어 단어 입력"
              />
            </div>

            <br></br>

            <div className="ui icon input">
              <i className="search icon"></i>
              <input
                onChange={_jaHandler}
                type="text"
                placeholder="알본어 단어 입력"
              />
            </div>
          </div>
        </div>
        <div className="column">
          <h2 className="header">등록 현황</h2>
          <br></br>
          <div class="ui container segment">
            <h2 class="ui header">{data.word_en}</h2>
            <p>
              일본어
              {!jaWord ? "추가 필요" : jaWord}
            </p>
            <p>
              한국어
              {koWord ? "추가 필요" : koWord}
            </p>
          </div>
        </div>
      </div>
      <div className="ui vertical divider" />
    </div>
  );
};

const check = (word_id, lang) => {
  return new Promise((resolve, reject) => {
    console.log(word_id);
    OpenLangApi.get(`/wordSingle?word_id=${word_id}&lang=${lang}`).then(
      (res, err) => {
        console.log(res.data.word);
        if (res.data.word) resolve(res.data.word);
        resolve(false);
      }
    );
  });
};

// 완전히 새로운 단어 추가
const addNewWord = (data, _koHandler, _jaHandler) => {
  return (
    <div>
      <p>입력하신 단어를 데이터베이스에서 찾을 수 없었습니다.</p>
      <div className="ui header">
        {data.word_en}을 데이터베이스에 추가하도록 하겠습니다.
      </div>

      <div className="ui icon input">
        <i className="kr flag"></i>
        <input
          onChange={_koHandler}
          type="text"
          placeholder="한국어 단어 입력"
        />
      </div>

      <br></br>

      <div className="ui icon input">
        <i className="japan flag"></i>
        <input
          onChange={_jaHandler}
          type="text"
          placeholder="일본어 단어 입력"
        />
      </div>

      <div className="fluid ui primary button">제출 및 등록</div>
    </div>
  );
};

export default WordAdd;
