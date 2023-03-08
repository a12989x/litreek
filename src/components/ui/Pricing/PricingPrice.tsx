type Props = {
  children: React.ReactNode;
};

const PricingPrice = ({ children }: Props) => {
  return <span className='text-5xl font-bold'>{children}</span>;
};

export default PricingPrice;
