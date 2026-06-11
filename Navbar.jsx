import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: '#2c3e50',
      color: 'white',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ margin: 0, fontSize: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
          🛒 ShopEase
        </Link>
      </h1>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Home</Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Products</Link>
        <Link to="/cart" style={{ 
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
          Cart <span style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 8px',
            fontSize: '12px',
            marginLeft: '5px'
          }}>{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;