import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Test user credentials
  const testUser = {
    email: 'test@podkeys.com',
    password: 'password123'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if the entered credentials match the test user
    if (email === testUser.email && password === testUser.password) {
      console.log('Login successful');
      onLogin();
      navigate('/home');
    } else {
      console.log('Login failed');
      alert('Invalid credentials. Please use the test user email and password.');
    }
  };

  const fillTestCredentials = () => {
    setEmail(testUser.email);
    setPassword(testUser.password);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-b from-indigo-50 to-white">
      <div className="card w-full max-w-md p-8 fade-in">
        <div className="flex justify-center mb-6">
          <LogIn size={48} className="text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          Login to Pod.Keys
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-primary w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-primary w-full"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full hover-lift">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <button onClick={fillTestCredentials} className="text-indigo-600 hover:text-indigo-500 text-sm">
            Use Test Credentials
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          Test User: {testUser.email} / {testUser.password}
        </p>
      </div>
    </div>
  );
};

export default Login;