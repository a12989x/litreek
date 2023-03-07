type Props = {
  children: React.ReactNode;
};

const FormInputs = ({ children }: Props) => {
  return <div className='space-y-4'>{children}</div>;
};

export default FormInputs;
