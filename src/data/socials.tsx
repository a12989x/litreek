import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PatreonIcon,
  SnapchatIcon,
  SpotifyIcon,
  TikTokIcon,
  TwitchIcon,
  TwitterIcon,
  YouTubeIcon,
} from '~/components/icons';

export type Socials = {
  baseUrl: string;
  name: string;
  thumbnail: JSX.Element;
  placeholder: string;
}[];

const socials: Socials = [
  {
    baseUrl: 'mailto:',
    name: 'Email',
    thumbnail: <MailIcon className='h-5 w-5' />,
    placeholder: 'name@example.com',
  },
  {
    baseUrl: 'https://instagram.com/',
    name: 'Instagram',
    thumbnail: <InstagramIcon className='h-5 w-5' />,
    placeholder: 'Instagram handle',
  },
  {
    baseUrl: 'https://www.twitch.tv/',
    name: 'Twitch',
    thumbnail: <TwitchIcon className='h-5 w-5' />,
    placeholder: 'Twitch handle',
  },
  {
    baseUrl: 'https://www.twitter.com/',
    name: 'Twitter',
    thumbnail: <TwitterIcon className='h-5 w-5' />,
    placeholder: 'Twitter handle',
  },
  {
    baseUrl: 'https://www.youtube.com/',
    name: 'YouTube',
    thumbnail: <YouTubeIcon className='h-5 w-5' />,
    placeholder: 'YouTube channel',
  },
  {
    baseUrl: 'https://www.facebook.com/',
    name: 'Facebook',
    thumbnail: <FacebookIcon className='h-5 w-5' />,
    placeholder: 'Facebook page',
  },
  {
    baseUrl: 'https://app.discord.com/',
    name: 'Discord',
    thumbnail: <DiscordIcon className='h-5 w-5' />,
    placeholder: 'Discord username',
  },
  {
    baseUrl: 'https://www.tiktok.com/',
    name: 'TikTok',
    thumbnail: <TikTokIcon className='h-5 w-5' />,
    placeholder: 'TikTok handle',
  },
  {
    baseUrl: 'https://snapchat.com/',
    name: 'Snapchat',
    thumbnail: <SnapchatIcon className='h-5 w-5' />,
    placeholder: 'Snapchat handle',
  },
  {
    baseUrl: 'https://linkedin.com/in/',
    name: 'LinkedIn',
    thumbnail: <LinkedInIcon className='h-5 w-5' />,
    placeholder: 'LinkedIn handle',
  },
  {
    baseUrl: 'https://open.spotify.com/user/',
    name: 'Spotify',
    thumbnail: <SpotifyIcon className='h-5 w-5' />,
    placeholder: 'Spotify handle',
  },
  {
    baseUrl: 'https://www.patreon.com/',
    name: 'Patreon',
    thumbnail: <PatreonIcon className='h-5 w-5' />,
    placeholder: 'Patreon handle',
  },
];

export default socials;
