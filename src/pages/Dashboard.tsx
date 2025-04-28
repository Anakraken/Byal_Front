import { logoutUser } from '../redux/features/auth/authThunks';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/features/hooks';
import { DashboardLayout } from '../lib/Layouts/DashboardLayout';
import { persistor } from '../redux/store'; // <- Asegúrate de importar esto

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        persistor.purge(); // <- 💥 Limpia localStorage
        navigate('/login');
      })
      .catch((err) => console.error("Error en logout:", err));
  };

  return (
    <DashboardLayout>
      <h1>Dashboard</h1>
    </DashboardLayout>
  );
};