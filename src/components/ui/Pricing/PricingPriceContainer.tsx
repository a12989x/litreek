type Props = {
  children: React.ReactNode;
};

const PricingPriceContainer = ({ children }: Props) => {
  return (
    <div className='flex justify-center gap-x-2 rounded-md border border-gray-600 p-4'>
      {children}
    </div>
  );
};

export default PricingPriceContainer;
