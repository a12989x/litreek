import { z } from 'zod';

import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';

const socialRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    const uId = ctx.session.user.id;
    const socials = ctx.prisma.link.findMany({
      where: {
        AND: [{ userId: uId }, { type: 'social' }],
      },
    });

    return socials;
  }),

  get: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
    const social = ctx.prisma.link.findUnique({
      where: { id: input },
    });

    return social;
  }),
});

export default socialRouter;
