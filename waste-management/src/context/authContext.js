import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


// Criação do contexto de autenticação
const AuthContext = createContext();

// Componente de provedor de contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Função para realizar login
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/collections'); // Redireciona para a página principal após o login
  };

  // Função para realizar logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login'); // Redireciona para a página de login
  };

  // Função para verificar se o usuário está autenticado
  const isAuthenticated = () => {
    return user !== null;
  };

  // Função para verificar se o usuário tem permissão
  const hasPermission = (role) => {
    return user && user.role === role;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para acessar o contexto de autenticação
export const useAuth = () => {
  return useContext(AuthContext);
};

