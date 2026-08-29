import React from "react";

function OrderItem({ item }) {
  return (
    <div>
      <h4>{item.productName}</h4>

      <p>Price: ₹{item.price}</p>

      <p>Quantity: {item.quantity}</p>

      <p>Subtotal: ₹{item.subtotal}</p>
    </div>
  );
}

export default OrderItem;
