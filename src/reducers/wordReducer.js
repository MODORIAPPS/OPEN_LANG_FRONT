import { WORD_SESSION_START, WORD_LANG_ADD } from "../actions/types";

const INTIAL_STATE = {
  isExist: null,
  session: false,
  word_id: null,
  word_en: null,
};

// return which new state by ... syntax
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case WORD_SESSION_START:
      console.log(action.payload);
      return {
        ...state,
        word_en: action.payload.word_en,
        word_id: action.payload.word_id,
        isExist: action.payload.isExist,
        session: true,
      };
    case WORD_LANG_ADD:
      if (action.payload.word_ko && action.payload.word_ja) {
        return {
          ...state,
          word_ko: action.payload.word_ko,
          word_ja: action.payload.word_ja,
        };
      } else if (action.payload.word_ko || action.payload.word_ja) {
        if (action.payload.word_ko) {
          return { ...state, word_ko: action.payload.word_ko };
        } else {
          return { ...state, word_ko: action.payload.word_ja };
        }
      }
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
