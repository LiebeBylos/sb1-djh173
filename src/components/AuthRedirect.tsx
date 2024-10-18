import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Here you would typically handle the authentication response
    // For example, extracting tokens from the URL and storing them

    // For now, we'll just simulate a successful login and redirect to the home page
    console.log('Authentication redirect handled');
    navigate('/home');
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl">Completing authentication, please wait...</p>
    </div>
  );
};

export default AuthRedirect;