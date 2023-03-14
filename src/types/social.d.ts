import { type z } from 'zod';
import { type socialSchema } from '~/schemas';

export type Social = z.infer<typeof socialSchema>;
