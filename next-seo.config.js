const name = 'Alexis Guzman';

const SEO = {
	title: `${name} - Litreek`,
	description: `Hi, I'm ${name} and this is a list of all my link neede to know me. Visit my links and let's chat`,
	canonical: 'https://litreek.vercel.app',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://litreek.vercel.app',
		title: `${name} - Litreek`,
		description: `Hi, I'm ${name} and this is a list of all my link neede to know me. Visit my links and let's chat`,
		images: [
			{
				url: 'https://litreek.vercel.app/og.png',
				alt: `${name} - Litreek`,
				width: 1280,
				height: 720,
			},
		],
	},
	twitter: {
		handle: '@__codax__',
		site: '@__codax__',
		cardType: 'summary_large_image',
	},
};

export default SEO;
