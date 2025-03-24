import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', product, {
        withCredentials: true,
      });
      navigate('/');
    } catch (error) {
      alert('Error adding product');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={e => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={e =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          onChange={e => setProduct({ ...product, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          onChange={e => setProduct({ ...product, image: e.target.value })}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
