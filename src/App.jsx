import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'

function App() {
    const [products, setProducts] = useState([
        {
          id: 1,
          name: "iPhone 15",
          brand: "Apple",
          description: "Apple smartphone",
          price: 70000,
          quantity: 10,
          sku: "IPH15"
        }
    ]);

  return (
        <div>
            <Navbar />
            <h1>Products</h1>
            <ProductList products={products} />
        </div>
  )
}

export default App
