import React, { useState, useEffect } from 'react';

function Products({ addToCart }) {
  // 1. Create a place in memory to store our products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch the products from the internet when the page loads
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Save the products in our memory
        setLoading(false); // Stop showing the loading text
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // 3. If the data is still loading, show a simple message
  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading products...</div>;
  }

  // 4. Render the products on the screen
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Products</h2>
      
      {/* This creates a simple layout wrapper */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px', 
        justifyContent: 'center' 
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '15px',
            width: '200px',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={product.image} 
              alt={product.title} 
              style={{ width: '100px', height: '100px', objectFit: 'contain' }} 
            />
            <h4 style={{ 
              fontSize: '14px', 
              height: '40px', 
              overflow: 'hidden',
              margin: '10px 0' 
            }}>
              {product.title}
            </h4>
            <p style={{ fontWeight: 'bold', color: '#2ecc71' }}>${product.price}</p>
            <button 
  onClick={() => addToCart(product)}
  style={{
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer'
  }}
>
  Add to Cart
</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
