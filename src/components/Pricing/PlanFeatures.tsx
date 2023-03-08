type Props = {
  children: React.ReactNode;
};

const PlanFeatures = ({ children }: Props) => {
  return <ul className='space-y-2'>{children}</ul>;
};

export default PlanFeatures;
