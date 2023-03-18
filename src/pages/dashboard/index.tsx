import { type GetServerSideProps, type NextPage } from 'next';

import { getServerAuthSession } from '~/server/auth';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (!session)
    return {
      redirect: { destination: '/login', permanent: false },
    };

  if (!session.user.username)
    return { redirect: { destination: '/setup', permanent: false } };

  return { redirect: { destination: '/dashboard/links', permanent: false } };
};

const Dashboard: NextPage = () => {
  return (
    <div>
      <p>dashboard</p>
    </div>
  );
};

export default Dashboard;
