import Image from 'next/image';

import Header from '../components/Header';
import Link from '../components/Link';

export const getStaticProps = async () => {
	const config = await import('../config.json').then((res) => res.default);

	return { props: { config } };
};

const Home = ({ config }) => {
	return (
		<main>
			<Image
				src={config.avatar}
				alt={config.name}
				height='100'
				width='100'
			/>

			<h1>{config.name}</h1>
			{config.subtle && <h2 className='subtle'>{config.subtle}</h2>}

			<ul>
				{config.links.map((link, index) => (
					<li key={index}>
						{link.header ? (
							<Header {...link} />
						) : (
							<Link {...link} />
						)}
					</li>
				))}
			</ul>
		</main>
	);
};

export default Home;
