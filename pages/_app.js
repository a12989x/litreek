import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';

import '../styles/globals.scss';

import SEO from '../next-seo.config';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider
			defaultTheme='noir'
			enableSystem={false}
			themes={['leaf', 'snow', 'noir']}
		>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
