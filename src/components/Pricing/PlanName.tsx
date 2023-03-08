type Props = {
  children: React.ReactNode;
};

const PlanName = ({ children }: Props) => {
  return <h3 className='text-xl font-bold'>{children}</h3>;
};

export default PlanName;
