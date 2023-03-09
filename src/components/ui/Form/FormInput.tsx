import { FormControl } from '@radix-ui/react-form';
import { Input } from '~/components/ui';
import { type Props as InputProps } from '~/components/ui/Input';

interface Props extends InputProps {
  type: string;
  placeholder: string;
}

const FormInput = ({ type, placeholder, ...props }: Props) => {
  return (
    <FormControl asChild>
      <Input
        type={type}
        placeholder={placeholder}
        className='w-full bg-gray-100'
        {...props}
      />
    </FormControl>
  );
};

export default FormInput;
