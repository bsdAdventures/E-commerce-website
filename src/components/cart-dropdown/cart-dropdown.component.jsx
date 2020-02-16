import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import { CustomButton, CartItem } from "../../components";
import { selectCartItems } from "../../redux";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
