import { CartActionTypes } from "./cart.types";

export const cartReducer = (
  state = {
    hidden: true,
    cartItems: []
  },
  action
) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};