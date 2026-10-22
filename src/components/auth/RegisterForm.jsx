import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import PlanSelector from "./PlanSelector";
import Input from "../common/Input";
import FormError from "../common/FormError";

import { useAuth } from "../../context/AuthContext";
import { registerSchema } from "../../schemas/authSchemas";

const securityQuestionOptions = [
  "What is your childhood nickname?",
  "What city were you born in?",
  "What's Your Dream Company?",
  "What is your favorite subject?",
];

export default function RegisterForm() {
  const navigate = useNavigate();
  const { register: registerUser } = useAuth();
  const [serverError, setServerError] = useState("");

  const {
    register, control, handleSubmit, watch, setValue,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      fullName: "",
      email: "",
      contact: "",
      password: "",
      confirmPassword: "",

      securityQuestions: [
        {question: "", answer: ""},
        {question: "", answer: ""},
        {question: "", answer: ""},
      ],

      selectedPlan: "free",
      termsAccepted: false,
    },

    mode: "onBlur",
  });

  const {
    fields: securityFields,
  } = useFieldArray({
    control,
    name: "securityQuestions",
  });

  const selectedPlan = watch("selectedPlan");
  const password = watch("password", "");

  const passwordRequirements = [
    {label: "At least 8 characters", valid: password.length >= 8 },
    {label: "At least one uppercase letter",valid: /[A-Z]/.test(password)},
    {label: "At least one lowercase letter", valid: /[a-z]/.test(password)},
    {label: "At least one number",valid: /[0-9]/.test(password)},
    {label: "At least one special character",valid: /[!@#$%^&*(),.?":{}|<>]/.test(password)},
  ];

  const onSubmit = async (data) => {
    setServerError("");

    try {
      await registerUser({
        fullName: data.fullName.trim(),
        email: data.email.trim().toLowerCase(),
        contact: data.contact.trim(),
        password: data.password,
        plan: data.selectedPlan,
        securityQuestions: data.securityQuestions,
      });
      navigate("/");

    } catch (err) {
      setServerError(err?.message || "Unable to create your account. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register-form" noValidate>
      <div className="form-section">
        <h2> Create your InternGuard account</h2>
        <p className="register-intro"> Join InternGuard and start your safe journey today.</p>
        <Input label="Full Name" type="text" placeholder="Enter your full name" {...register("fullName")} error={errors.fullName?.message}/>
        <Input label="Email Address" type="email" placeholder="Enter your email" {...register("email")} error={errors.email?.message}/>
        <Input label="Contact Number" type="tel" placeholder="Enter your contact number" {...register("contact")} error={errors.contact?.message}/>
      </div>

      <div className="form-section password-section">
        <h2> Secure your account </h2>
        <div className="password-fields">
          <div className="password-input">
            <Input label="Set Password" type="password" placeholder="Create a password" {...register("password")}/>
          </div>
          <div className="password-input">
            <Input label="Confirm Password" type="password" placeholder="Re-enter your password" {...register("confirmPassword")} error={errors.confirmPassword?.message}/>
          </div>
        </div>

        <div className="password-requirements">
          <div className="password-requirements-header">
            <span className="requirements-icon"> 🔐 </span>
            <div>
              <h4> Password requirements </h4>
              <p> Your password must meet all of these requirements. </p>
            </div>
          </div>
          <div className="requirements-list">
            {passwordRequirements.map((requirement) => (
              <div key={requirement.label} className={`requirement-item ${ requirement.valid ? "valid" : "invalid"}`}>
                <span className="requirement-check"> {requirement.valid ? "✓" : "×"} </span>
                <span> {requirement.label} </span>
              </div>
            ))}
          </div>
        </div>

        {errors.password?.message && (<FormError message={errors.password.message}/>)}
      </div>

      <div className="form-section">
        <h2> Account Recovery </h2>
        <p> Choose three questions to help recover your account if you forget your password. </p>

        {securityFields.map((field, index) => (

          <div className="form-group" key={field.id}>

            <label htmlFor={`security-question-${index}`}> Security Question {index + 1} </label>
            <select id={`security-question-${index}`} {...register( `securityQuestions.${index}.question` )}>
              <option value=""> Select a security question </option>
              {securityQuestionOptions.map((question) => ( <option key={question} value={question}> {question} </option>))}
            </select>

            <FormError message={errors.securityQuestions?.[index] ?.question?.message}/>

            <Input label="Answer" type="text" placeholder="Enter your answer" {...register(`securityQuestions.${index}.answer`)}
              error={errors.securityQuestions?.[index] ?.answer?.message}
            />

          </div>

        ))}

        <FormError message={ errors.securityQuestions?.message}/>

      </div>

      <div className="form-section">
        <h2> Choose your plan </h2>
        <PlanSelector selectedPlan={selectedPlan} onPlanChange={(value) => {
            setValue( "selectedPlan", value, {shouldValidate: true, shouldDirty: true});
          }}
        />
        <FormError message={errors.selectedPlan?.message}/>
      </div>

      <div className="terms-section">
        <label htmlFor="register-terms">
          <input id="register-terms" type="checkbox" {...register("termsAccepted")}/>
          <span>I agree to the Terms of Service and Privacy Policy. </span>
        </label>
        <FormError message={ errors.termsAccepted?.message}/>
      </div>

      {serverError && (<p className="form-error" role="alert"> {serverError} </p>)}

      <button type="submit" disabled={isSubmitting}> {isSubmitting ? "Creating Account..." : "Create Account"} </button>

      <p className="auth-switch"> Already have an account?
        {" "}
        <button type="button" onClick={() => navigate("/auth")}> Login </button>
      </p>

    </form>
  );
}