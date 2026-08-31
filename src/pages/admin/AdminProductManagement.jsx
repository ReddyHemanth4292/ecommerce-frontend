import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../services/productService";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../../services/adminProductService";
import AdminProductRow from "./AdminProductRow";
import ProductForm from "./ProductForm";

function AdminProductManagement() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data.content);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (product) => {
    try {
      console.log("Creating product:", product);
      const createdProduct = await createProduct(product);
      setProducts((currentProducts) => [...currentProducts, createdProduct]);
      console.log("Product created successfully:", createdProduct);
      setShowForm(false);
    } catch (error) {
      setError("Unable to create product." + error);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?",
    );
    if (!confirmed) {
      return;
    }
    try {
      await deleteProduct(id);
      fetchProduct();
    } catch (error) {
      setError("Unable to delete product.");
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleUpdate = async (productData) => {
    try {
      const updatedProduct = await updateProduct(
        editingProduct.id,
        productData,
      );
      setProducts((currentProducts) =>
        currentProducts.map((product) =>
          product.id === editingProduct.id ? updatedProduct : product,
        ),
      );
      setEditingProduct(null);
      setShowForm(false);
    } catch (error) {
      setError("Unable to update product.");
    }
  };

  const handleFormSubmit = async (productData) => {
    if (editingProduct) {
      await handleUpdate(productData);
    } else {
      await handleCreate(productData);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Product Management</h1>
      {/* <button onClick={() => setShowForm(!showForm)}>Add Product</button> */}

      {!showForm && (
        <button
          onClick={() => {
            setEditingProduct(null);
            setShowForm(true);
          }}
        >
          Add Product
        </button>
      )}

      {showForm && (
        <ProductForm
          product={editingProduct}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      )}

      {!showForm &&
        products.map((product) => (
          <AdminProductRow
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
    </div>
  );
}

export default AdminProductManagement;
