import { type NextPage } from 'next';
import { Button } from '~/components/ui';

const Home: NextPage = () => {
  return (
    <div className='mt-16'>
      <main className='mx-auto flex  max-w-screen-xl flex-col items-center px-8'>
        <h1 className='mb-4 text-center text-6xl font-bold'>
          One link to <br /> multiple pages
        </h1>
        <h2 className='mb-8 text-2xl'>
          Build a beautiful site for all your links and get proper analytics of
          your visitors.
        </h2>
        <form className='relative mb-16 flex items-center justify-center overflow-hidden rounded-lg font-medium'>
          <div className='ml-0.5 flex h-[44px] items-center justify-center rounded-l-lg bg-white pl-6'>
            <span>litreek.link/</span>
          </div>
          <input
            type='text'
            className='peer h-[44px] w-52 pr-6 text-purple-500 outline-none placeholder:text-gray-400'
            placeholder='yourname'
          />
          <div className='peer-focus:animate-cta-bg peer-hover:animate-cta-bg absolute inset-0 -z-10 bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500 bg-[length:165%]' />
          <Button
            href='/signup'
            size='large'
            type='submit'
            intent='cta'
            className='bg-none'
          >
            Claim{' '}
            <span className='font-normal italic'>
              &nbsp; &mdash; it&apos;s free
            </span>
          </Button>
        </form>
      </main>

      <div className='h-[600px] w-full rounded-lg bg-gray-100' />
    </div>
  );
};

export default Home;
