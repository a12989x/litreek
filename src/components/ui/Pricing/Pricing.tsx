type Props = {
  children: React.ReactNode;
};

const Pricing = ({ children }: Props) => {
  return (
    <li className='space-y-6 rounded-lg border border-gray-600 p-6'>
      {children}
    </li>
  );
};

export default Pricing;
