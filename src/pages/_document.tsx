import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='en' className='scroll-smooth'>
      <Head />
      <body className='text-gray-1200 bg-gray-100 font-sans antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
