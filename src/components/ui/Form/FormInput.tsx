import { FormControl } from '@radix-ui/react-form';
import { cn } from '~/utils';

import { Input } from '~/components/ui';
import { type Props as InputProps } from '~/components/ui/Input';

interface Props extends InputProps {
  type: string;
  placeholder: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FormInput = ({ type, placeholder, ref, ...props }: Props) => {
  return (
    <FormControl asChild>
      <Input
        type={type}
        placeholder={placeholder}
        className={cn(
          'w-full bg-gray-100',
          'data-[invalid=true]:border-red-700 data-[invalid=true]:outline-red-800',
          'hover:data-[invalid=true]:border-red-800'
        )}
        {...props}
      />
    </FormControl>
  );
};

export default FormInput;
