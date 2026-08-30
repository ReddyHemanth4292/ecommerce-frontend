import React from "react";

function AdminProductRow({ product, onEdit, onDelete }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Brand: {product.brand}</p>
      <p>Price: ₹{product.price}</p>
      <p>Stock: {product.quantity}</p>
      <p>SKU: {product.sku}</p>
      <button onClick={() => onEdit(product)}>Edit</button>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
}

export default AdminProductRow;
