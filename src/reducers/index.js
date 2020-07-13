import { combineReducers } from "redux";
import wordReducer from "./wordReducer";
import authReducer from "./authReducer";
import suggestReducer from "./suggestReducer";
import panelReducer from "./panelReducer";

export default combineReducers({
  word: wordReducer,
  auth: authReducer,
  home: suggestReducer,
  panel: panelReducer,
});
