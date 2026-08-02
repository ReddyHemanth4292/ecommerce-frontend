function QuantitySelector() {
    const [quantity, setQuantity] = useState(1)
      const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if(quantity>1){
            setQuantity(i-1);
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