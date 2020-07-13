import React from "react";
import { TAG_SUGGEST, TAG_DRAFT } from "../constant";
import "../styles/tag.css"

const WordBookType = (props) => {
  switch (props.type) {
    case TAG_SUGGEST:
      return <div>{suggest()}</div>;

    case TAG_DRAFT:
      return <div>{draft()}</div>;

    default:
      return <div>{nothing()}</div>;
  }
};

// 0
const suggest = () => {
  return (
    <div className="tag suggest">
      <p>추천</p>
    </div>
  );
};

// 1
const draft = () => {
  return (
    <div className="tag draft">
      <p>초안</p>
    </div>
  );
};

const nothing = () => {
  return (
    <div className="tag">
      <p></p>
    </div>
  );
};

export default WordBookType;
