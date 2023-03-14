import { z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  username: z.string(),
  bio: z.string().optional(),
  location: z.string().optional(),
});

export const updateUserSchema = userSchema.extend({});
