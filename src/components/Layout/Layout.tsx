import { useRouter } from 'next/router';
import { Footer, Header } from '~/components';
import { cn } from '~/utils';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { asPath } = useRouter();
  const show = asPath === '/' || asPath === '/register' || asPath === '/login';

  return (
    <div
      className={cn(
        'grid min-h-screen',
        show ? 'grid-rows-[auto_1fr_auto]' : ''
      )}
    >
      {show && <Header />}
      {children}
      {show && <Footer />}
    </div>
  );
};

export default Layout;
