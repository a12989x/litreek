import { Button, Link } from '~/components/ui';

import NavLink from './NavLink';

const Header = () => {
  return (
    <header className='sticky top-0 z-20'>
      <div className='pointer-events-none absolute top-0 -z-10 h-24 w-full select-none bg-gray-100/20 backdrop-blur [mask-image:linear-gradient(to_bottom,#000_4.8rem,transparent)]' />
      <nav className='mx-auto max-w-screen-xl px-8 py-4'>
        <ul className='flex h-10 items-center gap-6'>
          <li>
            <Link href='/'>Logo</Link>
          </li>
          <NavLink href='/register'>Get Started</NavLink>
          <NavLink href='/#features'>Features</NavLink>
          <NavLink href='/#pricing'>Pricing</NavLink>
          <NavLink href='/#faq'>FAQ</NavLink>

          <li className='!ml-auto'>
            <Link href='/login' className='hover:bg-gray-400' intent='nav'>
              Login
            </Link>
          </li>
          <li>
            <Button size='small' href='/register'>
              Sign up
              <span className='font-normal italic'>
                &nbsp; &mdash; it&apos;s free
              </span>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
