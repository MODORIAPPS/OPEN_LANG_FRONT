import React from "react";
import "../styles/diagram-showcase.css";
import "../styles/open-lang.css";
import CardList from "./diagram-showcase/CardList";

class DreamShowCase extends React.Component {
  render() {
    return (
      <div className="DiagramSshowcase">
        <div className="DiagramShowcase-header">
          <p className="">도형을 참조하기</p>
          <p className="text description">
            다양한 주제의 인터그래픽 도형을 찾아서 학습하거나 스스로 작성합니다.
          </p>
        </div>
        <div className="content">
          <CardList collection="트렌드" />
          <CardList collection="언어학습" />
          <CardList collection="생물" />
          <CardList collection="지리" />
        </div>
      </div>
    );
  }
}

export default DreamShowCase;
