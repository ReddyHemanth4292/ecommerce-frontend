import QuantitySelector from './QuantitySelector'
function ProductCard({ name, brand, price }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{brand}</p>
            <p>₹{price}</p>
            <button>View Product</button>
        </div>
    );
}

export default ProductCard;