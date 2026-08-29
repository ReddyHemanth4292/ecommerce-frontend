import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { hasRole } from "../utils/auth";
function Navbar() {
  const { cart } = useCart();
  const cartItemCount = cart?.items.length || 0;

  const isAdmin = hasRole("ADMIN");
  return (
    <nav className="navbar">
      <h2> My E-Commerce Store </h2>
      <Link to="/products"> Products </Link>
      {" | "}
      <Link to="/cart">Cart ({cartItemCount})</Link>
      {" | "}
      <Link to="/orders">My Orders</Link>
      {" | "}
      <Link to="/profile">Profile</Link>
      {" | "}
      {isAdmin && <Link to="/admin/dashboard">Admin</Link>}
    </nav>
  );
}

export default Navbar;
