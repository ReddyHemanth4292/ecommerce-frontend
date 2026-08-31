import ProductCard from "./ProductCard";
import { getProducts } from "../services/productService";
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.content);
      } catch (error) {
        setError("Unable to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          product.isDeleted !== true && <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
