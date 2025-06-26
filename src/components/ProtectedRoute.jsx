import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // user is not authenticated
    return <Navigate to="/auth/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;
