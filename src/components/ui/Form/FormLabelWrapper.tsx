type Props = {
  children: React.ReactNode;
};

const FormLabelWrapper = ({ children }: Props) => {
  return <div className='flex items-baseline justify-between'>{children}</div>;
};

export default FormLabelWrapper;
