import NextLink from 'next/link';

const Link = ({ title, url }) => {
	return (
		<NextLink href={url}>
			<a
				target='_blank'
				rel='noopener noreferrer'
				className='litreek__link'
			>
				{title}
			</a>
		</NextLink>
	);
};

export default Link;
