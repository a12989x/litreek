import Feature from './Feature';

const features = [
  {
    image: '/img/lets-get-started.svg',
    name: 'Launch your treek in minutes',
    description:
      'Customize your link in bio to make it pop! Add links, videos and more.',
  },
  {
    image: '/img/socials.svg',
    name: 'Share it everywhere',
    description: 'Share your link and gain more exposure.',
  },
  {
    image: '/img/security.svg',
    name: 'Trusted, Safe, Private',
    description: 'Everthing is transparent and manageable only by the user.',
  },
  {
    image: '/img/design.svg',
    name: 'Beautiful themes',
    description: 'A library of amazing pre-made themes.',
  },
  {
    image: '/img/palette.svg',
    name: 'Design your own',
    description: 'Create your own theme for your indenty.',
  },
  {
    image: '/img/search-engine-optimization.svg',
    name: 'SEO ready',
    description: 'Add a title and description for your link-in-bio',
  },
];

const Features = () => {
  return (
    <section
      className='mx-auto flex max-w-screen-xl scroll-mt-10 flex-col items-center py-20 px-8'
      id='features'
    >
      <h2 className='mb-4 text-5xl font-bold'>All the features you need</h2>
      <p className='mb-8 text-2xl'>
        Everthing you need to create your perfect{' '}
        <span className='after:bg-gray-1200 relative font-medium text-gray-100 before:absolute before:-inset-x-px before:top-0 before:-bottom-1 before:-z-10 before:bg-gradient-to-r before:from-indigo-900 before:to-purple-900 after:absolute after:-top-1 after:-bottom-2 after:right-0 after:w-px'>
          link-in-bio
        </span>
        .
      </p>
      <ul className='grid grid-cols-3 gap-8'>
        {features.map(({ image, name, description }) => (
          <Feature key={name}>
            <Feature.Image src={image} />
            <Feature.Name>{name}</Feature.Name>
            <Feature.Description>{description}</Feature.Description>
          </Feature>
        ))}
      </ul>
    </section>
  );
};

export default Features;
