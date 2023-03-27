import { useRouter } from 'next/router';
import { cn } from '~/utils';

import { Link } from '~/components/ui/Link';

type Props = {
  href: string;
  children: React.ReactNode;
};

const TabLink = ({ href, children }: Props) => {
  const { asPath } = useRouter();

  return (
    <li>
      <Link
        className={cn(
          href === asPath ? 'bg-indigo-500 hover:bg-indigo-500' : ''
        )}
        href={href}
        intent='nav'
      >
        {children}
      </Link>
    </li>
  );
};

export default TabLink;
