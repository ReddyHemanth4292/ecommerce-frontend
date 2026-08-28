import { useParams } from "react-router-dom";
import { getOrderById } from "../services/orderService";
import { useEffect, useState } from "react";

function OrderDetailsPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getOrderById(id);
        setOrder(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);
  if (loading) {
    return <p>Loading order...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (!order) {
    <p>Order not found</p>;
  }
  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>
        <strong>Order ID:</strong> {order.id}
      </p>
      <p>
        <strong>Status:</strong>
        {order.status}
      </p>
      <p>
        <strong>Order Date:</strong>{" "}
        {new Date(order.orderDate).toLocaleString()}
      </p>
      <h2>Items</h2>
      {order.items.map((item, index) => (
        <div key={index}>
          <h3>{item.productName}</h3>

          <p>Price: ₹{item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <p>Subtotal: ₹{item.subtotal}</p>
        </div>
      ))}
      <h2>Total: ₹{order.totalAmount}</h2>
    </div>
  );
}

export default OrderDetailsPage;