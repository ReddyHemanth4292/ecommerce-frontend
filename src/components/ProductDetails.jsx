import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../services/productService";
import ProductCard from "./ProductCard";
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        setError("Unable to load product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  if (loading) {
    return <p>Loading product...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="product-details">
      <Link to="/products"> ← Back to Products </Link> <h2>{product.name}</h2>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>
      <p>
        <strong>SKU:</strong> {product.sku}
      </p>
      <p>
        <strong>Available Stock:</strong> {product.quantity}
      </p>
      <button> Add to Cart </button>
    </div>
  );
}
export default ProductDetails;
