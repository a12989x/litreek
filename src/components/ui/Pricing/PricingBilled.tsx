type Props = {
  children: React.ReactNode;
};

const PricingBilled = ({ children }: Props) => {
  return <span className='text-sm'>{children}</span>;
};

export default PricingBilled;
