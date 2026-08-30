import React, { useState } from "react";

function ProductForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    quantity: "",
    sku: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Brand</label>
          <input name="brand" value={formData.brand} onChange={handleChange} />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>SKU</label>
          <input name="sku" value={formData.sku} onChange={handleChange} />
        </div>
        <button type="submit">Save Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
