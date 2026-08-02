import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
function ProductCard({product}) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <p>₹{product.price}</p>
      <p>SKU: {product.sku}</p>
      <p>Stock: {product.quantity}</p>
      <p></p>
      <div>
        <button onClick={() => {if(quantity>1){setQuantity(quantity - 1)}}}>-</button>

        <span>{quantity}</span>

        <button onClick={() => {setQuantity(quantity + 1)}}>+</button>
      </div>
      <div>Total: ₹{quantity*product.price}</div>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;