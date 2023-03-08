import { type NextPage } from 'next';
import { Features, Hero } from '~/components';

const Home: NextPage = () => {
  return (
    <div className='mt-16'>
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
