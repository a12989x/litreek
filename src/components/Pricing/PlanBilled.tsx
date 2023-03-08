type Props = {
  children: React.ReactNode;
};

const PlanBilled = ({ children }: Props) => {
  return <span className='text-sm'>{children}</span>;
};

export default PlanBilled;
