import { useAuthStore } from "@/store/useAuthStore";
import React from "react";
import { Navigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthProvider;
