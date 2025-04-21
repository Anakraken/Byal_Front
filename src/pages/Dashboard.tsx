import { logoutUser } from '../redux/features/auth/authThunks';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/features/hooks';
import { AuthLayout } from '../lib/Layouts/AuthLayout';

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => navigate('/login'))
      .catch((err) => console.error("Error en logout:", err));
  };

  return (
    <AuthLayout
      buttonText={loading ? 'Cerrando...' : 'Cerrar sesión'}
      linkText=''
      link=''
      onSubmit={handleLogout}
    >
      <h1>Dashboard</h1>
    </AuthLayout>
  );
};
