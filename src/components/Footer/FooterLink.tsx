import { Link } from '~/components/ui/Link';

type Props = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = ({ href, children }: Props) => {
  return (
    <li>
      <Link href={href} intent='footer'>
        {children}
      </Link>
    </li>
  );
};

export default FooterLink;
