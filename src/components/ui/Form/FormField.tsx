import { forwardRef } from 'react';
import { FormField as RadixFormField } from '@radix-ui/react-form';
import { cn } from '~/utils';

type Ref = React.ElementRef<typeof RadixFormField>;
type Props = React.ComponentPropsWithoutRef<typeof RadixFormField>;

const FormField = forwardRef<Ref, Props>(({ className, ...props }: Props) => {
  return (
    <RadixFormField className={cn('w-full space-y-2', className)} {...props} />
  );
});

FormField.displayName = 'FormField';

export default FormField;
