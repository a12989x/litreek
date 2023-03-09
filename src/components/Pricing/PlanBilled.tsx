type Props = {
  children: React.ReactNode;
};

const PlanBilled = ({ children }: Props) => {
  return (
    <div className='flex flex-col text-sm'>
      <span>peer monthly</span>
      <span className='text-gray-1100'>{children}</span>
    </div>
  );
};

export default PlanBilled;
