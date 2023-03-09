import Plan from './Plan';

const plans = [
  {
    isMain: false,
    name: 'Free',
    description: 'For anyone just getting started',
    monthly: '0',
    annually: '0',
    features: [
      { name: 'Access to free themes', checked: true },
      { name: 'Design your own theme', checked: true },
      { name: 'Up to 3 social links', checked: true },
      { name: 'Up to 10 links', checked: true },
      { name: 'Up to 2 embeds', checked: true },
      { name: '30 days of statics history', checked: true },
      { name: 'QR code', checked: true },
      { name: 'SEO Features', checked: false },
      { name: 'Removable branding', checked: false },
    ],
    button: 'Start for Free',
  },
  {
    isMain: true,
    name: 'Pro',
    description: 'Unlock treek full features',
    monthly: '4',
    annually: '3.2',
    features: [
      { name: 'Access to paid themes', checked: true },
      { name: 'Design your own theme', checked: true },
      { name: 'Up to 10 social links', checked: true },
      { name: 'Up to 25 links', checked: true },
      { name: 'Up to 5 embeds', checked: true },
      { name: 'Unlimited days of statics history', checked: true },
      { name: 'QR code personalized', checked: true },
      { name: 'SEO Features', checked: true },
      { name: 'Removable branding', checked: true },
    ],
    button: 'Get Started',
  },
];

const PricingSection = () => {
  return (
    <section
      id='pricing'
      className='mx-auto flex max-w-screen-xl scroll-mt-10 flex-col items-center py-20 px-8'
    >
      <h2 className='mb-4 text-5xl font-bold'>Simple, transparent pricing</h2>
      <p className='mb-8 text-2xl'>
        Get started now with a free plan, then unlock all the features.
      </p>

      <ul className='grid grid-cols-2 gap-8'>
        {plans.map(
          ({
            isMain,
            name,
            description,
            monthly,
            annually,
            features,
            button,
          }) => (
            <Plan key={name} isMain={isMain}>
              <Plan.Header>
                <Plan.Name>{name}</Plan.Name>
                <Plan.Description>{description}</Plan.Description>
              </Plan.Header>

              <Plan.PriceContainer>
                <Plan.Price>{monthly}</Plan.Price>
                <Plan.Billed>{'billed annually'}</Plan.Billed>
              </Plan.PriceContainer>

              <Plan.Features>
                {features.map(({ name, checked }) => (
                  <Plan.Feature key={name} checked={checked}>
                    {name}
                  </Plan.Feature>
                ))}
              </Plan.Features>

              <Plan.Button isMain={isMain}>{button}</Plan.Button>
            </Plan>
          )
        )}
      </ul>
    </section>
  );
};

export default PricingSection;
