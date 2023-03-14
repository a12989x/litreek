import { z } from 'zod';

export const createSocialSchema = z.object({
  domain: z.string(),
  url: z.string(),
  type: z.string(),
  name: z.string(),
  thumbnail: z.string(),
  position: z.number(),
});
