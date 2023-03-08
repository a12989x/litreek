type Props = {
  children: React.ReactNode;
};

const PricingFeatures = ({ children }: Props) => {
  return <ul className='space-y-2'>{children}</ul>;
};

export default PricingFeatures;
