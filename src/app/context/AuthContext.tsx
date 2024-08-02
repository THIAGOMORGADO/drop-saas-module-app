'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
  password: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Temporary local user for testing
  const [localUser, setLocalUser] = useState<User | null>({
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    password: '123456',
    picture: 'https://picsum.photos/200',
    role: 'admin'
  });

  useEffect(() => {
    // Set the local user to the user state for testing
    setUser(localUser);
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Implement login logic here
    setUser(localUser);
    setCookie('user', JSON.stringify(localUser), {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day from now
    });
  };

  const logout = () => {
    setUser(null);
    // Clear the user cookie
    deleteCookie('user');
    // Redirect to the home page
    // Check if there's a user cookie
    const userCookie = getCookie('user');
    if (!userCookie) {
      // If no user cookie, redirect to the home page
      window.location.href = '/';
    }
  };

  return (
    <AuthContext.Provider value={{ user: localUser, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};