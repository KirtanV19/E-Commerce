import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const user = useSelector((state) => state.auth.user);
    return user ? <Outlet /> : <Navigate to="/login" />;


};

export default ProtectedRoute;
