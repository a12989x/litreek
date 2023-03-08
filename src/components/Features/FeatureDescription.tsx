type Props = {
  children: React.ReactNode;
};

const FeatureDescription = ({ children }: Props) => {
  return <p className='text-center'>{children}</p>;
};

export default FeatureDescription;
