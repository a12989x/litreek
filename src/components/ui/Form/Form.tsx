import { forwardRef } from 'react';
import { Root as RadixForm } from '@radix-ui/react-form';
import { cn } from '~/utils';

type Ref = React.ElementRef<typeof RadixForm>;
type Props = React.ComponentPropsWithoutRef<typeof RadixForm>;

const Form = forwardRef<Ref, Props>(({ className, ...props }, ref) => {
  return (
    <RadixForm
      ref={ref}
      className={cn(
        'mx-auto w-full max-w-md rounded-lg border border-gray-600 p-6',
        className
      )}
      {...props}
    />
  );
});

Form.displayName = 'Form';

export default Form;
