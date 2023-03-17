import { forwardRef } from 'react';
import { FormLabel as RadixFormLabel } from '@radix-ui/react-form';
import { cn } from '~/utils';

type Ref = React.ElementRef<typeof RadixFormLabel>;
type Props = React.ComponentPropsWithoutRef<typeof RadixFormLabel>;

const FormLabel = forwardRef<Ref, Props>(({ className, ...props }, ref) => {
  return (
    <RadixFormLabel
      ref={ref}
      className={cn('font-medium', className)}
      {...props}
    />
  );
});

FormLabel.displayName = 'FormLabel';

export default FormLabel;
