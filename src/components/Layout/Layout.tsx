import { useRouter } from 'next/router';
import { Footer, Header } from '~/components';
import { cn } from '~/utils';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { asPath } = useRouter();
  const showHeader =
    asPath === '/' ||
    asPath.includes('/#') ||
    asPath === '/register' ||
    asPath === '/login';
  const showFooter = asPath === '/' || asPath.includes('/#');

  return (
    <div
      className={cn(
        'grid min-h-screen gap-y-6',
        showHeader ? 'grid-rows-[auto_1fr_auto]' : ''
      )}
    >
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
