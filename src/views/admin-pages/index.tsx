import { Button } from "../../components/Buttons";
import { useAppDispatch } from "../../redux/features/hooks";
import { logoutUser } from "../../redux/features/auth/authThunks";
import { persistor } from '../../redux/store';
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        persistor.purge();
        navigate('/login');
      })
      .catch((err) => console.error("Error en logout:", err));
    };

  return (
    <>
    <h1>Proximamente panel Administracion</h1>
    <Button onClick={handleLogout}>
      Salir
    </Button>
    </>
  );
};