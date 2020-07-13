import {
  WORD_SESSION_START,
  WORD_LANG_ADD,
  GOOGLE_SIGNINED,
  GOOGLE_SINGOUT,
  SUGGEST_CLOSE,
  SUGGEST_SHOW,
} from "./types";

export const wordSessionStart = (startElement) => {
  return {
    type: WORD_SESSION_START,
    payload: startElement,
  };
};

export const wordLangAdd = (element) => {
  return {
    type: WORD_LANG_ADD,
    payload: element,
  };
};

export const googleSigned = (element) => {
  return {
    type: GOOGLE_SIGNINED,
    payload: element,
  };
};

export const googleSignOut = () => {
  return {
    type: GOOGLE_SINGOUT,
  };
};

export const closeSuggest = () => {
  return {
    type: SUGGEST_CLOSE,
  };
};

export const showSuggest = () => {
  return {
    type: SUGGEST_SHOW,
  };
};


