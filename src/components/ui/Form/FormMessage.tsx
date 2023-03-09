import {
  FormMessage as RadixFormMessage,
  type FormMessageProps,
} from '@radix-ui/react-form';

interface Props extends FormMessageProps {
  children: React.ReactNode;
}

const FormMessage = ({ children, ...props }: Props) => {
  return (
    <RadixFormMessage className='text-sm text-red-500' {...props}>
      {children}
    </RadixFormMessage>
  );
};

export default FormMessage;
