import {
  PANEL_HOME,
  PANEL_DIAGRAM_SHOWCASE,
  PANEL_REFER_A_FRIEND,
  PANEL_SETTINGS,
} from "./types";

export const panelHome = () => {
  return {
    type: PANEL_HOME,
  };
};

export const panelDiagram = () => {
  return {
    type: PANEL_DIAGRAM_SHOWCASE,
  };
};

export const panelFriend = () => {
  return {
    type: PANEL_REFER_A_FRIEND,
  };
};

export const panelSettings = () => {
  return {
    type: PANEL_SETTINGS,
  };
};
