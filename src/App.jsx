import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
            <Navbar />

            <h1>Welcome to the Store</h1>
            <ProductCard name="iPhone 15" brand="Apple" price={70000}/>
            <ProductCard name="Galaxy S24" brand="Samsung" price={65000}/>
            <ProductCard name="Pixel 9" brand="Google" price={60000}/>
        </div>
  )
}

export default App
