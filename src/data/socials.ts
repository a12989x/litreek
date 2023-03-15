export type Socials = {
  baseUrl: string;
  name: string;
  thumbnail: string;
  placeholder: string;
}[];

const socials: Socials = [
  {
    baseUrl: 'mailto:',
    name: 'Email',
    thumbnail: 'email',
    placeholder: 'name@example.com',
  },
  {
    baseUrl: 'https://instagram.com/',
    name: 'Instagram',
    thumbnail: 'instagram',
    placeholder: 'Instagram handle',
  },
  {
    baseUrl: 'https://www.twitch.tv/',
    name: 'Twitch',
    thumbnail: 'twitch',
    placeholder: 'Twitch handle',
  },
  {
    baseUrl: 'https://www.twitter.com/',
    name: 'Twitter',
    thumbnail: 'twitter',
    placeholder: 'Twitter handle',
  },
  {
    baseUrl: 'https://www.youtube.com/',
    name: 'YouTube',
    thumbnail: 'youtube',
    placeholder: 'YouTube channel',
  },
  {
    baseUrl: 'https://www.facebook.com/',
    name: 'Facebook',
    thumbnail: 'facebook',
    placeholder: 'Facebook page',
  },
  {
    baseUrl: 'https://app.discord.com/',
    name: 'Discord',
    thumbnail: 'discord',
    placeholder: 'Discord username',
  },
  {
    baseUrl: 'https://www.tiktok.com/',
    name: 'TikTok',
    thumbnail: 'tiktok',
    placeholder: 'TikTok handle',
  },
  {
    baseUrl: 'https://snapchat.com/',
    name: 'Snapchat',
    thumbnail: 'snapchat',
    placeholder: 'Snapchat handle',
  },
  {
    baseUrl: 'https://linkedin.com/in/',
    name: 'LinkedIn',
    thumbnail: 'linkedin',
    placeholder: 'LinkedIn handle',
  },
  {
    baseUrl: 'https://open.spotify.com/user/',
    name: 'Spotify',
    thumbnail: 'spotify',
    placeholder: 'Spotify handle',
  },
  {
    baseUrl: 'https://www.patreon.com/',
    name: 'Patreon',
    thumbnail: 'patreon',
    placeholder: 'Patreon handle',
  },
];

export default socials;
