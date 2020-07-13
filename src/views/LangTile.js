import React from "react";
import "../styles/langtile.css"

const LangTile = (props) => {
  // lang
  if (!props) return <div></div>;
  const { text, langIcon } = langConfig[props.langType];
  return (
    <div className="lang-tile">
      <h5>
        {text} {langIcon} {props.langType}
      </h5>
    </div>
  );
};

const langConfig = {
  en: {
    text: "English",
    langIcon: "🇺🇸",
  },
  ko: {
    text: "한국어",
    langIcon: "🇰🇷",
  },
  ja: {
    text: "日本語",
    LangIcon: "🇯🇵",
  },
};

export default LangTile;
