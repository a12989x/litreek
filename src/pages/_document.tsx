import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className='scroll-smooth' lang='en'>
      <Head />
      <body className='text-gray-1200 bg-gray-100 font-sans antialiased selection:bg-indigo-900 selection:text-gray-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
