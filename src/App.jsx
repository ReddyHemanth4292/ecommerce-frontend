import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
