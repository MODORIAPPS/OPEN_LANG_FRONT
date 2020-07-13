import React from "react";

const ErrorMsg = (data) => {
  const title = data.title ? data.title : "죄송합니다. 문제가 발생했습니다.";
  const content = data.content ? data.content : "원인을 알 수 없음.";
  return (
    <div className="ui negative message">
      <div className="header">{title}</div>
      <p>{content}</p>
    </div>
  );
};

export default ErrorMsg;
