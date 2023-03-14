import { updateUserSchema } from '~/schemas';

import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';

const userRouter = createTRPCRouter({
  get: protectedProcedure.query(({ ctx }) => {
    const userId = ctx.session.user.id;
    const user = ctx.prisma.user.findUnique({
      where: { id: userId },
      select: {
        name: true,
        username: true,
        bio: true,
        location: true,
        image: true,
      },
    });

    return user;
  }),

  update: protectedProcedure
    .input(updateUserSchema)
    .mutation(({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const updatedUser = ctx.prisma.user.update({
        where: { id: userId },
        data: { ...input },
      });

      return updatedUser;
    }),
});

export default userRouter;
