import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
    const navigate = useNavigate();
    const location = useLocation();

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setError("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");

        if (!formData.email.trim()) {
            setError("Please enter your email address.");
            return;
        }

        if (!formData.password) {
            setError("Please enter your password.");
            return;
        }

        setIsSubmitting(true);

        try {

            await login({
                email: formData.email.trim().toLowerCase(),
                password: formData.password,
            });

            const destination =
                location.state?.from || "/";

            navigate(destination, { replace: true });
        } catch (err) {
            setError(
                err?.message ||
                "Invalid email or password. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-section">
                <h2>Welcome back</h2>

                <div className="form-group">
                    <label htmlFor="login-email">
                        Email Address
                    </label>

                    <input
                        id="login-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        autoComplete="email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="login-password">
                        Password
                    </label>

                    <input
                        id="login-password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                    />
                </div>

                <div className="forgot-password">
                    <Link to="/forgot-password">
                        Forgot Password?
                    </Link>
                </div>
            </div>

            {error && (
                <p className="form-error" role="alert">
                    {error}
                </p>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <div className="register-link">
                <p>
                    Don't have an account?{" "}
                    <Link to="/register">
                        Create one
                    </Link>
                </p>
            </div>
        </form>
    );
}