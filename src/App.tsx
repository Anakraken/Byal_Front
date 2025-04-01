import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';

function App() {

  // function ProtectedRoute({ children }) {
  //   const isAuthenticated = false; // Simulación de autenticación
  
  //   return isAuthenticated ? children : <Navigate to="/login" replace />;
  // }

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Navigate to="/login" replace />} /> */}
        {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}

        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path="*" element={<h1>No encontrado</h1>} /> {/* Ruta para páginas no encontradas */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;