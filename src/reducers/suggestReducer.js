import { SUGGEST_SHOW, SUGGEST_CLOSE } from "../actions/types";

const initialState = {
  suggest: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUGGEST_CLOSE:
      return { ...state, suggest: false };

    case SUGGEST_SHOW:
      return { ...state, suggest: true };

    default:
      return state;
  }
};
