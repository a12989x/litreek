import { z } from 'zod';

export const updateUserSchema = z.object({
  name: z.string(),
  username: z.string(),
  bio: z.string().optional(),
  location: z.string().optional(),
});
