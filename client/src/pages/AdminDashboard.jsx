import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAdmin();
    fetchOrders();
  }, []);

  const checkAdmin = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/auth/me', {
        withCredentials: true,
      });
      if (data.role !== 'admin') {
        navigate('/');
      } else {
        setIsAdmin(true);
      }
    } catch (error) {
      navigate('/');
    }
  };

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get(
        'http://localhost:5000/api/admin/orders',
        {
          withCredentials: true,
        }
      );
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders', error);
    }
  };

  return isAdmin ? (
    <div>
      <h2>Admin Dashboard</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.userId}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default AdminDashboard;
