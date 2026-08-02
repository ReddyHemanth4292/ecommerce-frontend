import QuantitySelector from './QuantitySelector'
function ProductCard() {
    return (
    <div>
      <h2>iPhone 15</h2>
      <p>Apple</p>
      <p>₹60,000</p>
      <QuantitySelector />
      <button>Add to Cart</button>
    </div>
    )
}

export default ProductCard;