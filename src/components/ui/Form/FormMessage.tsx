import { forwardRef } from 'react';
import { FormMessage as RadixFormMessage } from '@radix-ui/react-form';
import { cn } from '~/utils';

type Ref = React.ElementRef<typeof RadixFormMessage>;
type Props = React.ComponentPropsWithoutRef<typeof RadixFormMessage>;

const FormMessage = forwardRef<Ref, Props>(({ className, ...props }, ref) => {
  return (
    <RadixFormMessage
      ref={ref}
      className={cn('text-sm text-red-900', className)}
      {...props}
    />
  );
});

FormMessage.displayName = 'FormMessage';

export default FormMessage;
