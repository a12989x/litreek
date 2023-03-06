import { Link } from '~/components/ui';

import FooterLink from './FooterLink';

const Footer = () => {
  return (
    <footer className='mx-auto w-full max-w-screen-xl px-8 py-20 text-sm'>
      <nav className='flex justify-between pt-8'>
        <ul className='flex gap-4'>
          <li>
            <Link href='/'>Logo</Link>
          </li>
          <FooterLink href='/help'>Help Center</FooterLink>
          <FooterLink href='/terms'>Terms of Use</FooterLink>
          <FooterLink href='/privacy'>Privacy Policy</FooterLink>
        </ul>

        <p>
          Litreek is a{' '}
          <Link
            href='https://dub.sh/codingcodax'
            className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text font-medium text-transparent'
          >
            @codingcodax
          </Link>{' '}
          creation
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
