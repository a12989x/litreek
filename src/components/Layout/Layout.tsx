import { Footer, Header } from '~/components';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
