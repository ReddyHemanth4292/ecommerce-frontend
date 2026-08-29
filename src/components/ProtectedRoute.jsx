import React from 'react'
import { hasRole, isAuthenticated } from '../utils/auth';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, requiredRole }) {
    if(!isAuthenticated()){
        return <Navigate to="/login" replace />;
    }
    if (requiredRole && !hasRole(requiredRole)) {
        return <Navigate to="/unauthorized" replace />;
    }
  return children;
}

export default ProtectedRoute
