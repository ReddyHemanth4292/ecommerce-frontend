import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { Link } from "react-router-dom";
import { addToCart } from "../services/cartService";
import { useCart } from "../context/CartContext";
function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const { refreshCart } = useCart();

  const handleAddToCart = async () => {
    try {
      setLoading(true);
      setMessage("");
      setError("");
      for (let i = 0; i < quantity; i++) {
        await addToCart(product.id);
      }
      await refreshCart();
      setMessage("Product added to Cart");
    } catch {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div key={product.id} className="product-card">
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <p>₹{product.price}</p>
      <p>SKU: {product.sku}</p>
      <p>Stock: {product.quantity}</p>
      <p></p>
      <div className="quantity-selector">
        <button
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        >
          -
        </button>

        <span>{quantity}</span>

        <button
          onClick={() => {
            if (quantity < product.quantity) {
              setQuantity(quantity + 1);
            }
          }}
        >
          +
        </button>
      </div>
      <div>Total: ₹{quantity * product.price}</div>
      <button onClick={handleAddToCart} disabled={loading}>
        {loading ? "Adding..." : "Add to Cart"}
      </button>
      <Link to={`/products/${product.id}`}>View Details</Link>
      {message && <p>{message}</p>}

      {error && <p>{error}</p>}
    </div>
  );
}

export default ProductCard;
