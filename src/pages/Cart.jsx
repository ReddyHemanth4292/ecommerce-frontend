import { useEffect, useState } from "react";
import { getCart } from "../services/cartService";

function cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();
        setCart(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);
  if (loading) {
    return <p>Loading cart...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (!cart || cart.items.length == 0) {
    <p>Your cart is empty</p>;
  }
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.items.map((item) => (
        <div key={item.productId}>
          <h3>{item.productName}</h3>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Subtotal: ₹{item.subtotal}</p>
        </div>
      ))}
      <hr />
      <h3>Total Items: {cart.totalItems}</h3>
      <h2>Total: ₹{cart.totalPrice}</h2>
    </div>
  );
}

export default cart;
