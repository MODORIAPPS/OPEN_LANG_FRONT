import React from "react";
import LangTile from "./LangTile";
import "../styles/experibottom.css"

const ExperiBottom = () => {
  return (
    <div className="bottom">
      <p>서비스 지원 언어</p>
      <LangTile langType="en" />
      <LangTile langType="ko" />
      <LangTile langType="ja" />
    </div>
  );
};

export default ExperiBottom;
