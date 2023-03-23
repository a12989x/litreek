import { updateUserSchema, usernameSchema } from '~/schemas';

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

  getByUsername: protectedProcedure
    .input(usernameSchema)
    .mutation(({ ctx, input }) => {
      const username = ctx.prisma.user.findUnique({
        where: { username: input.username },
        select: {
          username: true,
        },
      });

      if (username) return username;
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

  updateUsername: protectedProcedure
    .input(usernameSchema)
    .mutation(({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const updateUsername = ctx.prisma.user.update({
        where: { id: userId },
        data: { ...input },
      });

      return updateUsername;
    }),
});

export default userRouter;
