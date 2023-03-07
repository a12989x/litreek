type Props = {
  children: React.ReactNode;
};

const FormItems = ({ children }: Props) => {
  return <div className='space-y-4'>{children}</div>;
};

export default FormItems;
