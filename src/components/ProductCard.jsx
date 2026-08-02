import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
function ProductCard({ name, brand, price }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <h3>{name}</h3>
      <p>{brand}</p>
      <p>₹{price}</p>
      <div>
        <button onClick={() => {if(quantity>1){setQuantity(quantity - 1)}}}>-</button>

        <span>{quantity}</span>

        <button onClick={() => {setQuantity(quantity + 1)}}>+</button>
      </div>
      <div>Total: ₹{quantity*price}</div>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;