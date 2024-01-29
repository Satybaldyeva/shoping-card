import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = ({ data }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div>
      <img src={data.productImage} alt={data.productName} />
      <div>
        <p>
          <b>{data.productName}</b>
        </p>
        <p>${data.price}</p>
        <div>
          <button onClick={() => removeFromCart(data.id)}> - </button>
          <input
            value={cartItems[data.id]}
            onChange={
              ((e) => updateCartItemCount(Number(e.target.value)), data.id)
            }
          />
          <button onClick={() => addToCart(data.id)}> + </button>
        </div>
      </div>
    </div>
  );
};
