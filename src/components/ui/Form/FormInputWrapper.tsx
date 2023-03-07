type Props = {
  children: React.ReactNode;
};

const FormInputWrapper = ({ children }: Props) => {
  return <div className='space-y-2'>{children}</div>;
};

export default FormInputWrapper;
