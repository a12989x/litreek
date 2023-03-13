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
});

export default userRouter;
