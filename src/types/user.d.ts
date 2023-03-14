import { type z } from 'zod';
import { type userSchema } from '~/schemas';

export type User = z.infer<typeof userSchema>;
