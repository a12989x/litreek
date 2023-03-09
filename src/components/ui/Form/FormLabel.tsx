import {
  FormLabel as RadixFormLabel,
  type LabelProps,
} from '@radix-ui/react-form';

interface Props extends LabelProps {
  children: React.ReactNode;
}

const FormLabel = ({ children, ...props }: Props) => {
  return (
    <RadixFormLabel className='font-medium' {...props}>
      {children}
    </RadixFormLabel>
  );
};

export default FormLabel;
