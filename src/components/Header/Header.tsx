import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { cn } from '~/utils';

import { buttonStyles } from '~/components/ui/Button';
import { Link } from '~/components/ui/Link';

import DropdownMenuAccount from './DropdownMenuAccount';
import NavLink from './NavLink';

const Header = () => {
  const { asPath } = useRouter();
  const { data: sessionData } = useSession();
  const isDashboard = asPath.includes('/dashboard');

  return (
    <header className='sticky top-0 z-10'>
      <div className='pointer-events-none absolute top-0 -z-10 h-24 w-full select-none bg-gray-100/20 backdrop-blur [mask-image:linear-gradient(to_bottom,#000_4.8rem,transparent)]' />
      <nav className='mx-auto max-w-screen-xl px-8 py-4'>
        <ul className='flex h-10 items-center gap-6'>
          <li>
            <Link href='/'>Logo</Link>
          </li>
          {!isDashboard && (
            <>
              <NavLink href='/register'>Get Started</NavLink>
              <NavLink href='/#features'>Features</NavLink>
              <NavLink href='/#pricing'>Pricing</NavLink>
              <NavLink href='/#faq'>FAQ</NavLink>
            </>
          )}

          {sessionData?.user ? (
            <li className='!ml-auto'>
              <DropdownMenuAccount />
            </li>
          ) : (
            <>
              <li className='!ml-auto'>
                <Link className='hover:bg-gray-400' href='/login' intent='nav'>
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className={cn(buttonStyles({ size: 'small' }))}
                  href='/register'
                >
                  Sign up
                  <span className='font-normal italic'>
                    &nbsp; &mdash; it&apos;s free
                  </span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
