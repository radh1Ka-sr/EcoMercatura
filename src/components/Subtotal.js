import React from "react";
import "../styles/Subtotal.css";
import * as utils from "../logic/utils";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="subtotal">
      <div className="subtotal__title">
        Subtotal ({cart.length} items):&nbsp;
        <strong>
          {utils.formatter.format(
            cart.reduce(
              (totalPrice, item) => (totalPrice += parseFloat(item.price)),
              0
            )
          )}
        </strong>
      </div>
      <div className="subtotal__gift">
        <input type="checkbox" name="gift" />
        <span>This order contains a gift</span>
      </div>
      <button
        onClick={() => navigate("/payment")}
        className="subtotal__button"
        type="button"
      >
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
