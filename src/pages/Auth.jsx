import { Navigate, useLocation } from "react-router-dom";

import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { useAuth } from "../context/AuthContext";

export default function Auth() {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    return <Navigate to="/" replace />;
  }

  const isRegister = location.pathname === "/register";

  return (
    <main className="auth-page">
      {isRegister ? <RegisterForm /> : <LoginForm />}
    </main>
  );
}