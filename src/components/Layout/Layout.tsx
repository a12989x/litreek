import { useRouter } from 'next/router';

import { Footer, Header } from '~/components';
import { cn } from '~/utils';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { asPath } = useRouter();
  const showHeader = !asPath.includes('/setup');
  const showFooter =
    !asPath.includes('/login') &&
    !asPath.includes('/register') &&
    !asPath.includes('/setup');

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
