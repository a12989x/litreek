type Props = {
  children: React.ReactNode;
};

const FormContainer = ({ children }: Props) => {
  return <div className='space-y-6'>{children}</div>;
};

export default FormContainer;
