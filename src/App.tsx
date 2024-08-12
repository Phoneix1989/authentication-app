<<<<<<< HEAD

import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Auth App</h1>
      <nav className="space-x-4">
        {/* <Link to="/register" className="text-blue-500 hover:underline">Register</Link> */}
        <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        <Link to="/Forgetpassword" className="text-blue-500 hover:underline">Forget Password</Link>
        {/* <Link to="/otp" className="text-blue-500 hover:underline">OTP</Link>
        
        <Link to="/reset-password" className="text-blue-500 hover:underline">Reset Password</Link> */} 
        </nav>
    </div>
  );
}
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import OTP from './components/OTP';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
>>>>>>> 1c2fd9df3871f1d56dad05c468433e66d730ed9d

export default App;
