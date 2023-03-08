type Props = {
  children: React.ReactNode;
};

const PlanPrice = ({ children }: Props) => {
  return <span className='text-5xl font-bold'>${children}</span>;
};

export default PlanPrice;
