import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(24),
  phone: z.string().min(6).max(12),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(24),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export const resetPasswordSchema = z.object({
  email: z.string().email(),
  newPassword: z.string().email(),
});
