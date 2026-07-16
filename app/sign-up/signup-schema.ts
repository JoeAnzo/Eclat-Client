// src/components/auth/signup-schema.ts
import * as z from "zod";

export const signUpSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
    .regex(/[0-9]/, { message: "Password must contain at least one number." }),
  code: z.string().optional(), // Used during the OTP verification step
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
