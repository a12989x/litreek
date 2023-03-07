import { Button } from '~/components/ui';

const Hero = () => {
  return (
    <main className='mx-auto flex  max-w-screen-xl flex-col items-center px-8'>
      <h1 className='mb-4 text-center text-6xl font-bold'>
        One link to <br /> multiple pages
      </h1>
      <h2 className='mb-8 text-2xl'>
        Build a beautiful site for all your links and get proper analytics of
        your visitors.
      </h2>
      <form className='relative mb-16 flex items-center justify-center overflow-hidden rounded-lg font-medium'>
        <div className='ml-0.5 flex h-[44px] items-center justify-center rounded-l-lg bg-gray-100 pl-6'>
          <span>litreek.link/</span>
        </div>
        <input
          type='text'
          className='peer/input h-[44px] w-52 pr-6 text-indigo-900 outline-none placeholder:text-gray-900'
          placeholder='yourname'
        />
        <Button
          href='/signup'
          size='large'
          type='submit'
          intent='cta'
          className='peer/button bg-none outline-0'
        >
          Claim{' '}
          <span className='font-normal italic'>
            &nbsp; &mdash; it&apos;s free
          </span>
        </Button>
        <div className='peer-focus/input:animate-cta-bg peer-hover/input:animate-cta-bg peer-focus/button:animate-cta-bg peer-hover/button:animate-cta-bg absolute inset-0 -z-10 bg-gradient-to-r from-pink-900 via-indigo-900 to-purple-900 bg-[length:165%]' />
      </form>
    </main>
  );
};

export default Hero;
