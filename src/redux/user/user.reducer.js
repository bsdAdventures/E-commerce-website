import { UserActionType } from "./user.types";

export const userReducer = (
  state = {
    currentUser: null
  },
  action
) => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
