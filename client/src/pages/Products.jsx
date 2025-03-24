import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  const addToCart = async productId => {
    try {
      await axios.post(
        'http://localhost:5000/api/cart/add',
        { productId, quantity: 1 },
        { withCredentials: true }
      );
      alert('Added to cart!');
    } catch (error) {
      alert('Error adding to cart');
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <Link to="/add-product">Add Product</Link>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product._id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
