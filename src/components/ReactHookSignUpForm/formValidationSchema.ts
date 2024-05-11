import { z } from "zod";

export const formValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  language: z
    .string()
    .min(2, "Languegae must be at least 2 characters long")
    .max(15, "Languegae must be at least 15 characters long"),
});

export type SignUpFormData = z.infer<typeof formValidationSchema>;
