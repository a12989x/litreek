import { forwardRef } from 'react';
import { FormControl } from '@radix-ui/react-form';
import { cn } from '~/utils';

import { Input, type Props as InputProps } from '~/components/ui/Input';

type Ref = React.ElementRef<typeof FormControl>;
type Props = InputProps;

const FormInput = forwardRef<Ref, Props>(({ className, ...props }, ref) => {
  return (
    <FormControl ref={ref} asChild>
      <Input
        className={cn(
          'w-full bg-gray-100',
          'data-[invalid=true]:border-red-700 data-[invalid=true]:outline-red-800',
          'hover:data-[invalid=true]:border-red-800',
          className
        )}
        {...props}
      />
    </FormControl>
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;
