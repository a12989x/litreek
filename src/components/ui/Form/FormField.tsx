import {
  FormField as RadixFormField,
  type FormFieldProps,
} from '@radix-ui/react-form';

interface Props extends FormFieldProps {
  children: React.ReactNode;
}

const FormField = ({ children, ...props }: Props) => {
  return (
    <RadixFormField className='w-full space-y-2' {...props}>
      {children}
    </RadixFormField>
  );
};

export default FormField;
