type Props = {
  children: React.ReactNode;
};

const PricingTitle = ({ children }: Props) => {
  return <h3 className='text-xl font-bold'>{children}</h3>;
};

export default PricingTitle;
