import { type NextPage } from 'next';
import Link from 'next/link';

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
        <main className=' text-center'>
          <h1 className='mb-4 text-6xl font-bold'>
            One link to <br /> multiple pages
          </h1>
          <h2 className='mb-8 text-2xl'>
            Build a beautiful site for all your links and get proper analytics
            of your visitors.
          </h2>
          <form className='mb-16'>
            <input type='text' placeholder='litreek.link/yourname' />
            <button type='submit'>Claim &mdash; it&apos;s free</button>
          </form>
        </main>

        <div className='h-[600px] w-full bg-gray-100' />
      </div>
    </div>
  );
};

export default Home;
