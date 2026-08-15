import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <h2> My E-Commerce Store </h2>
      <Link to="/products"> Products </Link>
      {" | "}
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;
