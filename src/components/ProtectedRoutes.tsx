import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export function ProtectedRoute() {
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.email);

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
}