import { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/cart', { withCredentials: true })
      .then(response => setCart(response.data))
      .catch(error => console.log(error));
  }, []);

  const removeFromCart = async productId => {
    await axios.delete(`http://localhost:5000/api/cart/remove/${productId}`, {
      withCredentials: true,
    });
    setCart(prev => ({
      ...prev,
      products: prev.products.filter(p => p.productId._id !== productId),
    }));
  };

  const placeOrder = async () => {
    await axios.post(
      'http://localhost:5000/api/orders/place',
      {},
      { withCredentials: true }
    );
    alert('Order placed!');
    setCart(null);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart?.products.map(item => (
        <div key={item.productId._id}>
          <h3>{item.productId.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(item.productId._id)}>
            Remove
          </button>
        </div>
      ))}
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
