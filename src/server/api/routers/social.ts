import { z } from 'zod';
import { createSocialSchema } from '~/schemas';

import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';

const socialRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    const uId = ctx.session.user.id;
    const socials = ctx.prisma.link.findMany({
      where: {
        AND: [{ userId: uId }, { type: 'social' }],
      },
      select: {
        url: true,
        type: true,
        name: true,
        thumbnail: true,
        position: true,
        visible: true,
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

  create: protectedProcedure
    .input(createSocialSchema)
    .mutation(({ ctx, input }) => {
      const uId = ctx.session.user.id;
      const newSocial = ctx.prisma.link.create({
        data: { ...input, userId: uId },
      });

      return newSocial;
    }),

  upsert: protectedProcedure
    .input(createSocialSchema)
    .mutation(({ ctx, input }) => {
      const uId = ctx.session.user.id;
      const social = ctx.prisma.link.upsert({
        where: { name: input.name },
        update: {
          url: input.url,
        },
        create: {
          ...input,
          userId: uId,
        },
      });

      return social;
    }),
});

export default socialRouter;
