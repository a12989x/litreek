type Props = {
  children: React.ReactNode;
};

const PlanDescription = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default PlanDescription;
