import { useState } from "react";
function QuantitySelector() {
    const [quantity, setQuantity] = useState(1)
      const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if(quantity>1){
            setQuantity(quantity-1);
        }
    }
    return (
        <div>
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
        </div>
    );
}

export default QuantitySelector;