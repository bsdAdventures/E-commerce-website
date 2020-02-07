import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { ShoppingBagIcon } from "../../assets";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={() => toggleCartHidden()}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

export default CartIcon;
