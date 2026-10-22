import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password must contain at least 8 characters.")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
  .regex(/[0-9]/, "Password must contain at least one number.")
  .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character.");

export const loginSchema = z.object({
  email: z.string().trim().min(1, "Please enter your email address.").email("Please enter a valid email address."),
  password: z.string().min(1, "Please enter your password."),
});

export const registerSchema = z
  .object({
    fullName: z.string().trim().min(2, "Full name must contain at least 2 characters."),
    email: z.string().trim().email("Please enter a valid email address."),
    contact: z.string().trim().regex( /^[0-9+\-\s()]{10}$/, "Please enter a valid contact number."),
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Please confirm your password."),

    securityQuestions: z.array(
        z.object({
          question: z.string().min(1, "Please select a security question."),
          answer: z.string().trim().min(1, "Please enter your answer."),
        })
      ).length(3, "Please provide three security questions."),

    selectedPlan: z.string().min(1, "Please select a plan."),
    termsAccepted: z.boolean().refine( (value) => value === true, "Please accept the Terms of Service and Privacy Policy."),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match.",
      });
    }

    const questions = data.securityQuestions.map(
      (item) => item.question
    );

    if (new Set(questions).size !== questions.length) {
      ctx.addIssue({
        code: "custom",
        path: ["securityQuestions"],
        message: "Please choose three different security questions.",
      });
    }
  });

export const forgotEmailSchema = z.object({
  forgotEmail: z.string().trim().email("Please enter a valid email address."),
});

export const resetPasswordSchema = z
  .object({
    forgotAnswer: z.string().trim().min(1, "Please enter your answer."),
    newPassword: passwordSchema,
    confirmNewPassword: z.string().min(1, "Please confirm your new password."),
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.confirmNewPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmNewPassword"],
        message: "New passwords do not match.",
      });
    }
  });