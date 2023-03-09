import { type NextPage } from 'next';
import { Features, Hero, Pricing } from '~/components';

const Home: NextPage = () => {
  return (
    <div className='mt-16'>
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
};

export default Home;
