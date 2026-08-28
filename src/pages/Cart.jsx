import { useEffect, useState } from "react";
import { getCart } from "../services/cartService";
import {
  removeCartItem,
  updateCartItem,
  clearCart,
} from "../services/cartService";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { checkout } from "../services/orderService";

function Cart() {
  //for implementing cart context commented below code and used useCart hook
  // const [cart, setCart] = useState(null);
  // const [loading, setLoading] = useState(true);

  const { cart, loading, refreshCart } = useCart();
  const [error, setError] = useState("");

  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const navigate = useNavigate();

  const handleAddQuantity = async (cartItemId, currentQuantity) => {
    try {
      // setLoading(true);
      setError("");
      const newQuantity = currentQuantity + 1;
      await updateCartItem(cartItemId, newQuantity);
      //const updatedCart = await getCart();
      //setCart(updatedCart);
      await refreshCart();
    } catch (error) {
      setError(error.message);
    }
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleMinusQuantity = async (cartItemId, currentQuantity) => {
    try {
      // setLoading(true);
      setError("");
      await updateCartItem(cartItemId, currentQuantity - 1);
      // const updatedCart = await getCart();
      // setCart(updatedCart);
      await refreshCart();
    } catch (error) {
      setError(error.message);
    }
    //finally {
    //   setLoading(false);
    // }
  };

  const handleRemove = async (cartItemId) => {
    try {
      // setLoading(true);
      setError("");
      await removeCartItem(cartItemId);
      // const updatedCart = await getCart();
      // setCart(updatedCart);
      await refreshCart();
    } catch (error) {
      setError(error.message);
    }
    // finally {
    //   setLoading(false);
    // }
  };

  const handleClearCart = async () => {
    try {
      // setLoading(true);
      setError("");
      await clearCart();
      // const updatedCart = await getCart();
      // setCart(updatedCart);
      await refreshCart();
    } catch (error) {
      setError(error.message);
    }
    //finally {
    //   setLoading(false);
    // }
  };

  const handleCheckout = async () => {
    try {
      setCheckingOut(true);
      setCheckoutError("");
      const order = await checkout();
      navigate(`/orders/${order.id}`);
    } catch (error) {
      new Error(error.message);
    } finally {
      setCheckingOut(false);
    }
  };

  // useEffect(() => {
  //   const fetchCart = async () => {
  //     try {
  //       setLoading(true);
  //       setError("");
  //       const data = await getCart();
  //       setCart(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchCart();
  // }, []);

  // if (error) {
  //   return <p>{error}</p>;
  // }

  if (loading) {
    return <p>Loading cart...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  if (!cart || cart.items.length === 0) {
    return <h2>Your cart is empty</h2>;
  }
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.items.map((item) => (
        <div key={item.cartItemId}>
          <h3>{item.productName}</h3>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Subtotal: ₹{item.subtotal}</p>
          <button
            onClick={() => handleAddQuantity(item.cartItemId, item.quantity)}
          >
            +
          </button>
          <button
            onClick={() => handleMinusQuantity(item.cartItemId, item.quantity)}
          >
            -
          </button>
          <button onClick={() => handleRemove(item.cartItemId)}>Remove</button>
          {error && <p>{error}</p>}
        </div>
      ))}
      <hr />
      <h3>Total Items: {cart.totalItems}</h3>
      <h2>Total: ₹{cart.totalPrice}</h2>
      <button onClick={() => handleClearCart()}>Clear Cart</button>
      {checkoutError && <p>{checkoutError}</p>}
      <button
        onClick={handleCheckout}
        disabled={checkingOut || cart.items.length === 0}
      >
        {checkingOut ? "Placing Order" : "Checkout"}
      </button>
    </div>
  );
}

export default Cart;
