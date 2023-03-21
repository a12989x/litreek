import Image from 'next/image';
import {
  IconCircleDot,
  IconEdit,
  IconExternalLink,
  IconLogout,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import { signOut } from 'next-auth/react';

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

type Props = {
  image: string;
};

const DropdownMenuAccount = ({ image }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className='group rounded-full outline-indigo-800 focus:outline'
      >
        <button>
          <Image alt='user account' height={32} src={image} width={32} />
        </button>
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
              <IconExternalLink className='ml-auto' size={20} />
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
              <IconExternalLink className='ml-auto' size={20} />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className='w-full text-red-900 data-[highlighted]:bg-red-400'
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
