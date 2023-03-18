import { useRouter } from 'next/router';
import {
  IconChevronDown,
  IconCircleDot,
  IconEdit,
  IconLogout,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import { signOut } from 'next-auth/react';
import { cn } from '~/utils';

import { Button, buttonStyles } from '~/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/DropdownMenu';
import { Link } from '~/components/ui/Link';

import NavLink from './NavLink';

const Header = () => {
  const { asPath } = useRouter();
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

              <li className='!ml-auto'>
                <Link href='/login' className='hover:bg-gray-400' intent='nav'>
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

          {isDashboard && (
            <li className='!ml-auto'>
              <DropdownMenu>
                <DropdownMenuTrigger className='group' asChild>
                  <Button>
                    User{' '}
                    <IconChevronDown
                      className='ml-2 transition-transform ease-in-out group-data-[state=open]:rotate-180'
                      size={20}
                    />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align='end' className='w-56'>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href='/dashboard'>
                        <IconEdit className='mr-2' size={20} /> Manage links
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link isExternal href='/'>
                        <IconUser className='mr-2' size={20} />
                        View page
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href='/account'>
                        <IconSettings className='mr-2' size={20} /> Account
                        settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link
                        isExternal
                        href='https://github.com/codingcodax/litreek/issues/new'
                      >
                        <IconCircleDot className='mr-2' size={20} />
                        Report a bug
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className='w-full text-red-900 data-[highlighted]:bg-red-400'
                      asChild
                    >
                      <button onClick={() => signOut({ callbackUrl: '/' })}>
                        <IconLogout className='mr-2' size={20} />
                        Sign out
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
