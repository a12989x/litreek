/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { type AppType } from 'next/app';
import { Inter as FontSans } from 'next/font/google';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { api } from '~/utils/api';

import '~/styles/globals.css';
import { Layout } from '~/components';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <style global jsx>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      `}</style>

      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
