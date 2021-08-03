import { ThemeProvider } from 'next-themes';

import '../styles/globals.scss';

import config from '../config';

const { theme } = config;

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider
			defaultTheme={theme}
			enableSystem={false}
			themes={['leaf', 'snow', 'noir']}
		>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
