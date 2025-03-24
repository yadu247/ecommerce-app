import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import Cart from './pages/Cart';
import AdminDashboard from './pages/AdminDashboard';
import Logout from './pages/Logout';

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<Products />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
