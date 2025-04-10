import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { ProtectedRoute } from './components/ProtectedRoutes';
import Cookies from 'js-cookie';
import { verifyTokenRequest } from './redux/api/auth';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from './redux/features/auth/authSlice'; 

function App() {
  const dispatch = useDispatch();

  async function checkLogin() {
    const cookies = Cookies.get();
    if (!cookies.token) {
      dispatch(clearUser());
      return;
    }

    try {
      const res = await verifyTokenRequest();
      dispatch(setUser(res.data)); // guarda usuario globalmente
    } catch (error) {
      dispatch(clearUser());
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        
        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<h1>Dashboard</h1>} />
        </Route>

        <Route path='*' element={<h1>No encontrado</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;