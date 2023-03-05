import { Link } from '~/components/ui';

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const NavLink = ({ href, className, children }: Props) => {
  return (
    <li className={className}>
      <Link href={href} intent='nav'>
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
