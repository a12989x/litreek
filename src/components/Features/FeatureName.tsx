type Props = {
  children: React.ReactNode;
};

const FeatureName = ({ children }: Props) => {
  return <h3 className='text-xl font-bold'>{children}</h3>;
};

export default FeatureName;
