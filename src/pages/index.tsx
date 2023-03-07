import { type NextPage } from 'next';
import { Hero } from '~/components';

const Home: NextPage = () => {
  return (
    <div className='mt-16'>
      <Hero />

      <div className='h-[600px] w-full rounded-lg bg-gray-200' />
    </div>
  );
};

export default Home;
