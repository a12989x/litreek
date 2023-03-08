import { type NextPage } from 'next';
import { Hero } from '~/components';

const Home: NextPage = () => {
  return (
    <div className='mt-16'>
      <Hero />
    </div>
  );
};

export default Home;
