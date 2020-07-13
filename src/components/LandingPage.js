import React from "react";
import TopNav from "./TopNav";
import "../styles/open-lang.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="langding">
        <TopNav />
        {headerView()}
        {/* {contentView()}
        {teacherSuggestView()} */}
      </div>
    );
  }
}

const headerView = () => {
  return (
    <div className="header-view">
      <div className="text content">
        <div>
          <h1>가장 거침없는 자기 자신이 되세요</h1>
          <p>어떤 주제든 마스터, 한 번에 하나의 성공</p>
          <button className="big button">학습 시작</button>
        </div>
        <div>
          <button className="plain button">선생님들 위한 솔루션</button>
          <button className="plain button">부모입니다</button>
        </div>
      </div>
      <div className="slider content"></div>
    </div>
  );
};

const contentView = () => {
  return (
    <div className="content-view">
      <h3>Quizlet을 사용하는 학생의 90%가 높은 점수를 받았다고 합니다.</h3>
    </div>
  );
};

const teacherSuggestView = () => {
  const text =
    "아무말이나 적어보려고 최대한 노력하지만 여간 쉬운 일이 아닙니다. 멋진말 좀 해보고 싶은데 도와주시면 정말 감사할 것 같네여 ^^ ";
  return (
    <div className="teacher-suggest-view">
      <div className="text content">
        <div>
          <p>아무텍스트</p>
          <h3>호우!! 리엑트는 재미있구나..!</h3>
          <p>{this.text}</p>
        </div>
        <button className="plain button">학습 시작</button>
      </div>
      <div className="image content"></div>
    </div>
  );
};

const appStoreView = () => {
  return (
    <div className="app-store-view">
      <h2>배운 것을 가지고 가세요</h2>
      <img
        src="../image/get_it_on_googleplay.png"
        alt="get_it_on_googleplay"
      ></img>
    </div>
  );
};

export default LandingPage;
