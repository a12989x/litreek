type Props = {
  children: React.ReactNode;
};

const FormDescription = ({ children }: Props) => {
  return <h2>{children}</h2>;
};

export default FormDescription;
