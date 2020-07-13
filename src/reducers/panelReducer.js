import {
  PANEL_HOME,
  PANEL_DIAGRAM_SHOWCASE,
  PANEL_REFER_A_FRIEND,
  PANEL_SETTINGS,
} from "../actions/types";

const initialState = {
  state: PANEL_HOME,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PANEL_HOME:
      return { ...state, state: PANEL_HOME };

    case PANEL_DIAGRAM_SHOWCASE:
      return { ...state, state: PANEL_DIAGRAM_SHOWCASE };

    case PANEL_REFER_A_FRIEND:
      return { ...state, state: PANEL_REFER_A_FRIEND };

    case PANEL_SETTINGS:
      return { ...state, state:  PANEL_SETTINGS};

    default:
      return state;
  }
};
