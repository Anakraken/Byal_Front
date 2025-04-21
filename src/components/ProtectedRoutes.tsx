import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { verifyTokenRequest } from '../redux/api/auth';
import { setUser } from '../redux/features/auth/authSlice';

// ✅ Detectar si hay un token válido aunque Redux esté vacío
// ✅ Redirigir si el token está expirado o inválido
// ✅ Dejar pasar si todo está bien

export function ProtectedRoute() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.email);
  const [checking, setChecking] = useState(true);
  const [validSession, setValidSession] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await verifyTokenRequest();
        dispatch(setUser(res.data));
        setValidSession(true);
      } catch (err) {
        setValidSession(false);
      } finally {
        setChecking(false);
      }
    };

    if (!isAuthenticated) {
      checkSession();
    } else {
      setValidSession(true);
      setChecking(false);
    }
  }, [isAuthenticated, dispatch]);

  if (checking) return <div>Cargando...</div>;
  if (!validSession) return <Navigate to="/login" replace />;

  return <Outlet />;
}
