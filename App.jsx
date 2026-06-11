import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  // This is our global cart memory
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      // If it exists, increase the quantity by 1
      setCart(cart.map((item) => 
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      ));
    } else {
      // If it's a new item, add it to the cart with a quantity of 1
      setCart([...cart, { ...product, qty: 1 }]);
    }
    alert(`${product.title} added to cart!`);
  };

  return (
    <Router>
      {/* Pass the cart count to Navbar so it can show a number like Cart (2) */}
      <Navbar cartCount={cart.reduce((total, item) => total + item.qty, 0)} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Pass the addToCart function to the Products page */}
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        
        {/* Pass the cart items to the Cart page */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
