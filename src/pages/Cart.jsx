import React from 'react';

function Cart({ cart, setCart }) {
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

  if (cart.length === 0) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Your cart is empty!</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Your Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #ddd',
          padding: '10px 0'
        }}>
          <div>
            <h4>{item.title}</h4>
            <p>${item.price} x {item.qty}</p>
          </div>
          <button 
            onClick={() => setCart(cart.filter((x) => x.id !== item.id))}
            style={{ backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
          >
            Remove
          </button>
        </div>
      ))}
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button style={{ backgroundColor: '#2ecc71', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
