type Props = {
  children: React.ReactNode;
};

const FeatureTitle = ({ children }: Props) => {
  return <h3 className='text-xl font-bold'>{children}</h3>;
};

export default FeatureTitle;
