//PRODUCCION
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
//DESARROLLO
import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RegisterPage } from './views/RegisterPage';
import { LoginPage } from './views/LoginPage';
import { AsigUnidades } from './views/dispatcher-pages/Asig-Unidades';
import { Registros } from './views/dispatcher-pages/Registro';
import { PreAsig } from './views/dispatcher-pages/Pre-Asignacion';
import { Reporte } from './views/dispatcher-pages/Reporte';
import { DNR } from './views/dispatcher-pages/DNR';
import { ProtectedRoute } from './components/ProtectedRoutes';
import Cookies from 'js-cookie';
import { verifyTokenRequest } from './redux/api/auth';
import { useDispatch} from 'react-redux';
import { useAppSelector } from './redux/features/hooks';
import { setUser, clearUser } from './redux/features/auth/authSlice'; 
import { AdminPage } from './views/admin-pages';
import { DriverPage } from './views/driver-pages';


function App() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { rol } = useAppSelector((state) => state.auth);

  const getRedirectPath = () => {
    switch (rol) {
      case 'Dispatcher': return '/asignacion-unidades';
      case 'Admin': return '/administracion';
      case 'Driver': return '/driver';
      default: return '/login';
    }
  };  

  async function checkLogin() {
    const cookies = Cookies.get();
    if (!cookies.token) {
      dispatch(clearUser());
      setIsLogin(false);
      setLoading(false);
      return;
    }
  
    try {
      const res = await verifyTokenRequest();
      dispatch(setUser(res.data));
      setIsLogin(true);
    } catch (error) {
      dispatch(clearUser());
      setIsLogin(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  if (loading) return <div className='center'><h2>Cargando...</h2></div>;
  
  if (!loading && isLogin && !rol) {
    return <div className='center'><h2>Obteniendo rol...</h2></div>;
  }

  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route 
          path='/' 
          element={
            isLogin && rol ? <Navigate to={getRedirectPath()} replace /> 
              : <Navigate to='/login' replace />
          }
        />
        <Route element={<ProtectedRoute />}>
          {rol === 'Dispatcher' && (
            <>
              <Route path='/asignacion-unidades' element={<AsigUnidades />} />
              <Route path='/registro' element={<Registros />} />
              <Route path='/pre-asignacion' element={<PreAsig />} />
              <Route path='/reporte-cierre' element={<Reporte />} />
              <Route path='/dnr' element={<DNR />} />
            </>
          )}
          {rol === 'Admin' && <Route path='/administracion' element={<AdminPage />} />}
          {rol === 'Driver' && <Route path='/driver' element={<DriverPage />} />}
        </Route>

        <Route path='*' element={<h1>No encontrado</h1>} />
      </Routes>
    </HashRouter>
  );
}


export default App;