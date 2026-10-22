import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../common/Input";
import { useAuth } from "../../context/AuthContext";

import { loginSchema, forgotEmailSchema, resetPasswordSchema} from "../../schemas/authSchemas";

export default function LoginForm() {
  const navigate = useNavigate();

  const { login, resetPassword } = useAuth();

  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotQuestion, setForgotQuestion] = useState("");
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const forgotForm = useForm({
    resolver: zodResolver(forgotEmailSchema),
    defaultValues: {
      forgotEmail: "",
    },
    mode: "onBlur",
  });

  const resetForm = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      forgotAnswer: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    mode: "onBlur",
  });

  const handleLogin = async (data) => {
    setServerError("");
    setIsSubmitting(true);

    try {
      await login({
        email: data.email.trim().toLowerCase(),
        password: data.password,
      });
      navigate("/");
    } catch (err) {
      setServerError(err?.message || "Invalid email or password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotEmail = async (data) => {
    setServerError("");

    try {
      const users = JSON.parse(localStorage.getItem("internGuardUsers") || "[]");
      const foundUser = users.find((user) => user.email === data.forgotEmail.trim().toLowerCase());
      if(!foundUser){
        setServerError("No account found with this email.");
        return;
      }
      if(!foundUser.securityQuestions || foundUser.securityQuestions.length === 0){
        setServerError("No recovery questions are available for this account.");
        return;
      }
      const randomIndex = Math.floor(Math.random() * foundUser.securityQuestions.length);
      setForgotQuestion(foundUser.securityQuestions[randomIndex].question);
    } catch (err) {
      setServerError(err?.message || "Unable to process your request.");
    }
  };

  const handlePasswordReset = async (data) => {
    setServerError("");
    setIsSubmitting(true);

    try {
      await resetPassword({
        email: forgotForm.getValues("forgotEmail").trim().toLowerCase(),
        question: forgotQuestion,
        answer: data.forgotAnswer,
        newPassword: data.newPassword,
      });
      alert("Password reset successful. Please login with your new password.");
      handleBackToLogin();
    } catch (err) {
      setServerError(err?.message || "Unable to reset password.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
    setForgotQuestion("");
    setServerError("");
    forgotForm.reset();
    resetForm.reset();
    loginForm.reset();
  };

  return (
    <form className="login-form"
      onSubmit={!isForgotPassword ? loginForm.handleSubmit(handleLogin) : forgotQuestion ? resetForm.handleSubmit(handlePasswordReset) : forgotForm.handleSubmit(handleForgotEmail)}
    >
      {!isForgotPassword ? (
        <>
          <div className="form-section">
            <h2>Welcome back</h2>
            <p>Login to your InternGuard account</p>
            <Input label="Email Address" type="email" placeholder="Enter your email" {...loginForm.register("email")}
              error={loginForm.formState.errors.email?.message}
            />

            <Input label="Password" type="password" placeholder="Enter your password" {...loginForm.register("password")}
              error={loginForm.formState.errors.password?.message}
            />

            <div className="forgot-password">
              <button type="button" onClick={() => {
                  setIsForgotPassword(true);
                  setServerError("");
                }}
              >
                Forgot Password?
              </button>
            </div>
          </div>

          {serverError && (<p className="form-error" role="alert"> {serverError} </p>)}

          <button type="submit" disabled={isSubmitting}> {isSubmitting ? "Logging in..." : "Login"} </button>

          <div className="register-link">
            <p> Don't have an account?{" "} <Link to="/register"> Create one </Link> </p>
          </div>
        </>
      ) : (
        <>
          <div className="form-section">
            <h2>Recover your account</h2>
            <p>Verify your identity to create a new password.</p>

            {!forgotQuestion ? (
              <Input label="Registered Email" type="email" placeholder="Enter your registered email"
                {...forgotForm.register("forgotEmail")} error={forgotForm.formState.errors.forgotEmail?.message}
              />
            ) : (
              <>
                <div className="form-group">
                  <label>Security Question</label>
                  <p>{forgotQuestion}</p>
                </div>

                <Input label="Answer" type="text" placeholder="Enter your answer"
                  {...resetForm.register("forgotAnswer")} error={resetForm.formState.errors.forgotAnswer?.message}
                />

                <Input label="New Password" type="password" placeholder="Enter new password"
                  {...resetForm.register("newPassword")} error={resetForm.formState.errors.newPassword?.message}
                />

                <Input label="Confirm New Password" type="password" placeholder="Re-enter new password"
                  {...resetForm.register("confirmNewPassword")} error={resetForm.formState.errors.confirmNewPassword ?.message}
                />
              </>
            )}
          </div>

          {serverError && ( <p className="form-error" role="alert"> {serverError} </p>)}

          <button type="submit" disabled={isSubmitting}> {!forgotQuestion ? "Continue" : "Reset Password"}</button>

          <div className="register-link">
            <button type="button" onClick={handleBackToLogin}> Back to Login </button>
          </div>
        </>
      )}
    </form>
  );
}