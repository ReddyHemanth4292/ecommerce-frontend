import { createContext, useContext, useEffect, useState } from "react";
import { getCart } from "../services/cartService";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshCart = async () => {
    try {
      const data = await getCart();

      setCart(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch cart:", error.message);
    }
  };

  useEffect(() => {
    const loadCart = async () => {
      try {
        await refreshCart();
      } catch (error) {
        console.error("Failed to load initial cart");
      } finally {
        setLoading(false);
      }
    };
    loadCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
