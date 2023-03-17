import { useRouter } from 'next/router';
import { cn } from '~/utils';

import { Link } from '~/components/ui/Link';

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const NavLink = ({ href, className, children }: Props) => {
  const { asPath } = useRouter();

  return (
    <li className={className}>
      <Link
        href={href}
        intent='nav'
        className={cn(
          href === asPath ? 'bg-indigo-500 hover:bg-indigo-500' : ''
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
