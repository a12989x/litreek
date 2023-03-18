import {
  IconChevronDown,
  IconCircleDot,
  IconEdit,
  IconLogout,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import { signOut } from 'next-auth/react';

import { Button } from '~/components/ui/Button';
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

const DropdownMenuAccount = () => {
  return (
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
              <IconSettings className='mr-2' size={20} /> Account settings
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
  );
};

export default DropdownMenuAccount;
