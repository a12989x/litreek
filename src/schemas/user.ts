import { z } from 'zod';

export const userSchema = z.object({
  image: z.string(),
  name: z.string(),
  username: z.string(),
  bio: z.string().optional(),
  location: z.string().optional(),
});

export const updateUserSchema = userSchema.extend({});
