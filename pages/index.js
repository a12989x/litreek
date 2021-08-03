import Image from 'next/image';

import Header from '../components/Header';
import Link from '../components/Link';

import config from '../config';

const { name, subtle, avatar, links } = config;

const Home = () => {
	return (
		<main>
			<Image src={avatar} alt={name} height='100' width='100' />

			<h1>{name}</h1>
			{subtle && <h2 className='subtle'>{subtle}</h2>}

			<ul>
				{links.map((link, index) => (
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
