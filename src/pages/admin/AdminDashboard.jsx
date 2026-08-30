import React, { useEffect, useState } from "react";
import { apiRequest } from "../../services/api";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [productData, orderData] = await Promise.all([
          apiRequest("/api/products"),
          apiRequest("/api/admin/orders"),
        ]);
        setTotalProducts(productData.totalElements || 0);
        setOrders(orderData || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadDashboard();
  }, []);

  if (loading) {
    return <p>Loading dashboard...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // const totalProducts = products.length;
  const totalOrders = orders.length;

  const totalRevenue = orders.reduce(
    (total, order) => total + (order.totalAmount || 0),
    0,
  );

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <p>Welcome to the Admin Panel.</p>

      <div>
        <div>
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>
        <div>
          <h3>Total Orders</h3>
          <p>{totalOrders}</p>
        </div>
        <div>
          <h3>Total Revenue</h3>
          <p>₹{totalRevenue}</p>
        </div>
      </div>
      <Link to="/admin/products">Product Management</Link>
    </div>
  );
}

export default AdminDashboard;
