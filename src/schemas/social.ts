import { z } from 'zod';

export const socialSchema = z.object({
  domain: z.string(),
  url: z.string(),
  type: z.string(),
  name: z.string(),
  thumbnail: z.string(),
  position: z.number(),
});

export const createSocialSchema = socialSchema.extend({});
