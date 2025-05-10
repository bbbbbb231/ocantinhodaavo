import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to admin if already authenticated
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <div className="text-center mb-8 animate-fadeIn">
        <div className="inline-flex items-center justify-center p-2 bg-blue-900 text-white rounded-full w-16 h-16 mb-4 mx-auto">
          <ShoppingBag className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-blue-900">Admin Access</h1>
        <p className="mt-2 text-gray-600">Please sign in with your name and access code</p>
      </div>
      
      <div className="w-full max-w-md animate-slideUp">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;