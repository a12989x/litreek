import { type NextPage } from 'next';
import Link from 'next/link';
import { Button } from '~/components/ui';

const Home: NextPage = () => {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <header className='sticky top-0'>
        <nav className='px-8 py-4'>
          <ul className='flex h-10 items-center gap-6'>
            <li>Logo</li>
            <li>
              <Link href='/register'>Get Started</Link>
            </li>
            <li>
              <Link href='#features'>Features</Link>
            </li>
            <li>
              <Link href='#pricing'>Pricing</Link>
            </li>
            <li>
              <Link href='#faq'>FAQ</Link>
            </li>
            <li className='!ml-auto'>
              <Link href='/login'>Login</Link>
            </li>
            <li>
              <Link href='/signup'>Sign up &mdash; it&apos;s free</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className='mt-16 px-8'>
        <main className='flex flex-col items-center'>
          <h1 className='mb-4 text-center text-6xl font-bold'>
            One link to <br /> multiple pages
          </h1>
          <h2 className='mb-8 text-2xl'>
            Build a beautiful site for all your links and get proper analytics
            of your visitors.
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
              Claim &mdash; it&apos;s free
            </Button>
          </form>
        </main>

        <div className='h-[600px] w-full rounded-lg bg-gray-100' />
      </div>
    </div>
  );
};

export default Home;
