import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import { CustomButton, CartItem } from "../../components";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
