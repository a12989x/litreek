import Image from 'next/image';

import Header from '../components/Header';
import Link from '../components/Link';

export const getStaticProps = async () => {
	const config = await import('../config.json').then((res) => res.default);

	return { props: { config } };
};

const Home = ({ config }) => {
	return (
		<main className='litreek'>
			<Image
				src={config.avatar}
				alt={config.name}
				height='100'
				width='100'
			/>

			<h1 className='litreek__name'>{config.name}</h1>
			{config.subtle && (
				<h2 className='litreek__subtle'>{config.subtle}</h2>
			)}

			<ul className='litreek__links'>
				{config.links.map((link, index) => (
					<li key={index} className='litreek__item'>
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
