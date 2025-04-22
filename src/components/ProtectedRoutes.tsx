import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { verifyTokenRequest } from '../redux/api/auth';
import { setUser, clearUser } from '../redux/features/auth/authSlice';

export function ProtectedRoute() {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [validSession, setValidSession] = useState<boolean>(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await verifyTokenRequest();
        dispatch(setUser(res.data));
        setValidSession(true);
      } catch (err) {
        dispatch(clearUser());
        setValidSession(false);
      } finally {
        setChecking(false);
      }
    };

    checkSession();
  }, [dispatch]);

  if (checking) return <div>Cargando...</div>;
  if (!validSession) return <Navigate to="/login" replace />;
  return <Outlet />;
}


// Siempre valida sesión con el backend, aunque Redux diga que estás logueado (por si recargas o hay manipulación del localStorage).

// Muestra una pantalla de carga mientras hace la verificación.

// Limpia Redux si el token es inválido (usando clearUser()).

// Redirige a login si no hay sesión válida.