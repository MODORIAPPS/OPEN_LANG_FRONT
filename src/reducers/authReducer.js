import { GOOGLE_SIGNINED, GOOGLE_SINGOUT } from "../actions/types";

const initialState = {
  isSigned: false,
};

// return which new state by ... syntax
export default (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_SIGNINED:
      return {
        ...state,
        userName: action.payload.userName,
        userEmail: action.payload.userEmail,
        userImage: action.payload.userImage,
        isSigned: true,
      };
    case GOOGLE_SINGOUT:
      return {
        ...state,
        userName: null,
        userEmail: null,
        userImage: null,
        isSigned: false,
      };
    default:
      return state;
  }
};
