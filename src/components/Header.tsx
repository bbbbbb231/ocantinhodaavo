import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-amber-700 hover:text-amber-600 transition-colors">
              <Store className="h-8 w-8 mr-2" />
              <span className="text-xl font-serif font-bold">O Cantinho da Avó</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link 
                  to="/admin" 
                  className="text-gray-700 hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  Admin Panel
                </Link>
                <div className="flex items-center text-gray-700 px-3 py-2 text-sm">
                  <UserCircle className="h-5 w-5 mr-1" />
                  <span>Welcome, {user?.username}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="flex items-center text-gray-700 hover:text-red-500 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="flex items-center text-gray-700 hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                <UserCircle className="h-5 w-5 mr-1" />
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;