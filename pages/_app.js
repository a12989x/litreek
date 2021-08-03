import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';

import '../styles/globals.scss';

import config from '../config';
import SEO from '../next-seo.config';

const { theme } = config;

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider
			defaultTheme={theme}
			enableSystem={false}
			themes={['leaf', 'snow', 'noir']}
		>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
