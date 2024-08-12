
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

export default App;
