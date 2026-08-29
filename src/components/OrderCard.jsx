import React, { useState } from "react";
import OrderItem from "./OrderItem";

function OrderCard({ order, onCancel }) {
    const handleCancel = async () => {
        try{
            await onCancel(order.id);
        }catch(error){
            console.error("Failed to cancel order:", error.message);
        }
    }
  const canCancel = order.status === "PLACED" || order.status === "PROCESSING";
  return (
    <div>
      <h3>Order #{order.id}</h3>
      <p>Order Date: {new Date(order.orderDate).toLocaleString()}</p>
      <p>Status: {order.status}</p>
      <p>Total Amount: ₹{order.totalAmount}</p>
      <h4>Items</h4>
      {order.items.map((item, index) => (
        <OrderItem key={index} item={item} />
      ))}
      {canCancel && <button onClick={handleCancel}>Cancel Order</button>}
    </div>
  );
}

export default OrderCard;
