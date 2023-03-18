import { type NextPage } from 'next';

import { Faqs, Features, Hero, Pricing } from '~/components';

const Home: NextPage = () => {
  return (
    <div className='mt-16'>
      <Hero />
      <Features />
      <Pricing />
      <Faqs />
    </div>
  );
};

export default Home;
