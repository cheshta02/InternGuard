import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PlanSelector from "./PlanSelector";
import { useAuth } from "../../context/AuthContext";

export default function RegisterForm() {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        contact: "",
        password: "",
        confirmPassword: "",
        termsAccepted: false,
    });

    // Free is selected by default.
    const [selectedPlan, setSelectedPlan] = useState("free");

    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value,
        }));

        setError("");
    };

    const validateForm = () => {
        if (!formData.fullName.trim()) {
            return "Please enter your full name.";
        }

        if (!formData.email.trim()) {
            return "Please enter your email address.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            return "Please enter a valid email address.";
        }

        if (!formData.contact.trim()) {
            return "Please enter your contact number.";
        }

        if (!/^[0-9+\-\s()]{7,20}$/.test(formData.contact.trim())) {
            return "Please enter a valid contact number.";
        }

        if (!formData.password) {
            return "Please create a password.";
        }

        if (formData.password.length < 8) {
            return "Password must contain at least 8 characters.";
        }

        if (!formData.confirmPassword) {
            return "Please confirm your password.";
        }

        if (formData.password !== formData.confirmPassword) {
            return "Passwords do not match.";
        }

        if (!selectedPlan) {
            return "Please select a plan.";
        }

        if (!formData.termsAccepted) {
            return "Please accept the Terms of Service and Privacy Policy.";
        }

        return "";
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");

        const validationError = validateForm();

        if (validationError) {
            setError(validationError);
            return;
        }

        setIsSubmitting(true);

        try {

            await register({
                fullName: formData.fullName.trim(),
                email: formData.email.trim().toLowerCase(),
                contact: formData.contact.trim(),
                password: formData.password,
                plan: selectedPlan,
            });



            navigate("/");
        } catch (err) {
            setError(
                err?.message ||
                "Unable to create your account. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGoogleRegister = () => {

        console.log(
            "Continue with Google selected. Selected plan:",
            selectedPlan
        );
    };

    const handleLinkedInRegister = () => {

        console.log(
            "Continue with LinkedIn selected. Selected plan:",
            selectedPlan
        );
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <div className="form-section">
                <h2>Create your InternGuard account</h2>

                <div className="form-group">
                    <label htmlFor="register-full-name">
                        Full Name
                    </label>

                    <input
                        id="register-full-name"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="register-email">
                        Email Address
                    </label>

                    <input
                        id="register-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        autoComplete="email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="register-contact">
                        Contact Number
                    </label>

                    <input
                        id="register-contact"
                        name="contact"
                        type="tel"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Enter your contact number"
                        autoComplete="tel"
                    />
                </div>
            </div>

            <div className="form-section">
                <h2>Secure your account</h2>

                <div className="form-group">
                    <label htmlFor="register-password">
                        Set Password
                    </label>

                    <input
                        id="register-password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        autoComplete="new-password"
                    />

                    <small>
                        Password must contain at least 8 characters.
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="register-confirm-password">
                        Confirm Password
                    </label>

                    <input
                        id="register-confirm-password"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Re-enter your password"
                        autoComplete="new-password"
                    />
                </div>
            </div>

            <div className="form-section">
                <h2>Choose your plan</h2>

                <PlanSelector
                    selectedPlan={selectedPlan}
                    onPlanChange={setSelectedPlan}
                />
            </div>

            <div className="social-registration">
                <p>Or continue with</p>

                <div>
                    <button
                        type="button"
                        onClick={handleGoogleRegister}
                    >
                        Continue with Google
                    </button>

                    <button
                        type="button"
                        onClick={handleLinkedInRegister}
                    >
                        Continue with LinkedIn
                    </button>
                </div>
            </div>

            <div className="terms-section">
                <label htmlFor="register-terms">
                    <input
                        id="register-terms"
                        name="termsAccepted"
                        type="checkbox"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                    />

                    <span>
                        I agree to the Terms of Service and Privacy Policy.
                    </span>
                </label>
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
                {isSubmitting
                    ? "Creating Account..."
                    : "Create Account"}
            </button>
            <p className="auth-switch">
                Already have an account?{" "}
                <button
                    type="button"
                    onClick={() => navigate("/auth")}
                >
                    Login
                </button>
            </p>
        </form>
    );
}