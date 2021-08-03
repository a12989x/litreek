import NextLink from 'next/link';

const Link = ({ title, url, background }) => {
	return (
		<NextLink href={url}>
			<a target='_blank' rel='noopener noreferrer' className='link'>
				{title}
			</a>
		</NextLink>
	);
};

export default Link;
