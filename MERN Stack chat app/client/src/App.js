import './App.css';
import Form from './modules/Form';
import Dashboard from './modules/Dashboard/index';
import { BrowserRouter as Router, Route, Navigate, Routes, Link } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('user:token') !== null || true;

  if (!isAuthenticated) {
    return <Navigate to={'/users/sign_in'} />;
  }
  else if (isAuthenticated && ['/users/sign_in', '/users/sign_up'].includes(window.location.pathname)) {
    return <Navigate to={'/'} />
  }

  return children;
};

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
      />
      <Route path='/users/sign_in' element={<ProtectedRoute><Form isSignPage={true} /></ProtectedRoute>} />
      <Route path='/users/sign_up' element={<ProtectedRoute><Form isSignPage={false} /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;
