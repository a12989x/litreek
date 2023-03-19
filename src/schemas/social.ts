import { z } from 'zod';

export const socialSchema = z.object({
  url: z.string(),
  type: z.string(),
  name: z.string(),
  position: z.number(),
});

export const createSocialSchema = socialSchema.extend({});
