import React, { useEffect, useState } from "react";
import { cancelOrder, getMyOrders } from "../services/orderService";
import OrderCard from "../components/OrderCard";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);
  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getMyOrders();
      setOrders(data);
    } catch (error) {
      setError(error.message || "Unable to load orders");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async (orderId) => {
    try {
      setError("");
      const updatedOrder = await cancelOrder(orderId);
      setOrders((currentOrders) =>
        currentOrders.map((order) =>
          order.id === orderId ? updatedOrder : order,
        ),
      );
    } catch (error) {
      setError(error.message || "Unable to cancel order");
    }
  };

  if (loading) {
    return <p>Loading orders...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (orders.length === 0) {
    return <p>You have not placed any orders yet.</p>;
  }
  return (
    <div>
      <h2>My Orders</h2>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} onCancel={handleCancelOrder} />
      ))}
    </div>
  );
}

export default OrdersPage;
