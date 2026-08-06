import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { Link } from "react-router-dom";
function ProductCard({product}) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div key={product.id}>
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <p>₹{product.price}</p>
      <p>SKU: {product.sku}</p>
      <p>Stock: {product.quantity}</p>
      <p></p>
      <div>
        <button onClick={() => {if(quantity>1){setQuantity(quantity - 1)}}}>-</button>

        <span>{quantity}</span>

        <button onClick={() => {if (quantity < product.quantity) { setQuantity(quantity + 1); }}}>+</button>
      </div>
      <div>Total: ₹{quantity*product.price}</div>
      <button>Add to Cart</button>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;