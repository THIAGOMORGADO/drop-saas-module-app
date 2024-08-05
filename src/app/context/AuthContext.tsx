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
  const [localUser, setLocalUser] = useState<User[] | null>( // Changed to an array of User
    [
      {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        password: '123456',
        picture: 'https://picsum.photos/200',
        role: 'admin'
      },
      {
        id: '2', // Added a second user
        name: 'Another User',
        email: 'another@example.com',
        password: '654321',
        picture: 'https://picsum.photos/201',
        role: 'user'
      }
    ]
  );

  useEffect(() => {
    // Set the local user to the user state for testing
    if (localUser && localUser.length > 0) {
      setUser(localUser[0]); // Set to the first user
    } else {
      setUser(null); // Handle case where localUser is empty
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Implement login logic here
    const foundUser = localUser?.find(user => user.email === email && user.password === password);
    setUser(foundUser || null); // Set to found user or null if not found
    setCookie('user', JSON.stringify(foundUser), { // Store only the found user
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
    <AuthContext.Provider value={{ user: user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};