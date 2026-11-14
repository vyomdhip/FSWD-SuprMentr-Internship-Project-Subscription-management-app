import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const AdminRoute = ({ children }) => {
  const isAdmin = useAuthStore((state) => state.isAdmin);

  if (!isAdmin) {
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default AdminRoute;
