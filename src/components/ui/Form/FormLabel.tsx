import { type ComponentProps } from 'react';

type LabelProps = ComponentProps<'label'>;

interface Props extends LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const FormLabel = ({ htmlFor, children, ...props }: Props) => {
  return (
    <label htmlFor={htmlFor} className='font-medium' {...props}>
      {children}
    </label>
  );
};

export default FormLabel;
