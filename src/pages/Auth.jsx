import { Navigate, useLocation } from "react-router-dom";

import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { useAuth } from "../context/AuthContext";
import "../styles/auth.css";
export default function Auth() {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    return <Navigate to="/" replace />;
  }

  const isRegister = location.pathname === "/register";

 return (
  <main className="auth-page">
    {isRegister ? (
      <div className="register-container">
        <div className="register-card-wrapper">

          <div className="register-left-panel">
            <div className="register-left-content">
              <h1>
                Opportunities
                <span> Meet Security</span>
              </h1>

              <p>
                InternGuard helps you find verified internships
                and protects you from scams.
              </p>
            </div>
          </div>

          <RegisterForm />

        </div>
      </div>
    ) : (
      <LoginForm />
    )}
  </main>
);
    
}