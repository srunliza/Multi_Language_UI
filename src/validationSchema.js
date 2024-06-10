import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email format."),
  gender: z.enum(["Male", "Female"], "Gender is required."),
  birthDate: z.string().min(1, "DOB is required."), 
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email format."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});
