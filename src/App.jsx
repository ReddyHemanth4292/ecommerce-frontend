import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'

function App() {

  return (
        <div>
            <Navbar />
            <h1>Products</h1>
            <ProductList />
        </div>
  )
}

export default App
