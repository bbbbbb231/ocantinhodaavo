import React, { createContext, useState, useContext, useEffect } from 'react';
import { AuthUser, AuthContextType } from '../types';

const ADMIN_ACCESS_CODE = "anasofia2324";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('shopUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('shopUser');
      }
    }
  }, []);

  const login = (username: string, accessCode: string): boolean => {
    if (accessCode === ADMIN_ACCESS_CODE) {
      const newUser = {
        username,
        accessCode,
        isAuthenticated: true
      };
      setUser(newUser);
      localStorage.setItem('shopUser', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('shopUser');
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user?.isAuthenticated
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};