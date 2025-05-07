//PRODUCCION
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
//DESARROLLO
import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { AsigUnidades } from './pages/Asig-Unidades';
import { Registros } from './pages/Registro';
import { PreAsig } from './pages/Pre-Asignacion';
import { Reporte } from './pages/Reporte';
import { DNR } from './pages/DNR';
import { ProtectedRoute } from './components/ProtectedRoutes';
import Cookies from 'js-cookie';
import { verifyTokenRequest } from './redux/api/auth';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from './redux/features/auth/authSlice'; 

function App() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <h2>Cargando...</h2>;

  return (
    // <BrowserRouter> Activar esto cuando ya vaya a produccion
    <HashRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        {/* <Route path='/register' element={<RegisterPage />} /> */}
        <Route path="/"
          element={
            isLogin ? <Navigate to="/asignacion-unidades" replace /> : <Navigate to="/login" replace />
          }
        />
        
        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path='/asignacion-unidades' element={<AsigUnidades/>} />
          <Route path='/registro' element={<Registros/>} />
          <Route path='/pre-asignacion' element={<PreAsig/>} />
          <Route path='/reporte-cierre' element={<Reporte/>} />
          <Route path='/dnr' element={<DNR/>} />
        </Route>

        <Route path='*' element={<h1>No encontrado</h1>} />
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;