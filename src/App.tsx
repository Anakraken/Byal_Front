//PRODUCCION
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
//DESARROLLO
import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoutes';
import Cookies from 'js-cookie';
import { verifyTokenRequest } from './redux/api/auth';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from './redux/features/auth/authSlice'; 

function App() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);

  async function checkLogin() {
    const cookies = Cookies.get();
    if (!cookies.token) {
      dispatch(clearUser());
      setIsLogin(false);
      return;
    }

    try {
      const res = await verifyTokenRequest();
      dispatch(setUser(res.data)); // guarda usuario globalmente
      setIsLogin(true);
    } catch (error) {
      dispatch(clearUser());
      setIsLogin(false);
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    // <BrowserRouter> Activar esto cuando ya vaya a produccion
    <HashRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path="/"
          element={
            isLogin ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
          }
        />
        
        
        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard/>} />
        </Route>

        <Route path='*' element={<h1>No encontrado</h1>} />
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;