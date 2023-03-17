import { forwardRef } from 'react';
import { FormControl } from '@radix-ui/react-form';
import { cn } from '~/utils';

import {
  Textarea,
  type Props as TextareaProps,
} from '~/components/ui/Textarea';

type Ref = React.ElementRef<typeof FormControl>;
type Props = TextareaProps;

const FormTextarea = forwardRef<Ref, Props>(({ className, ...props }, ref) => {
  return (
    <FormControl ref={ref} asChild>
      <Textarea
        className={(cn('max-h-28 min-h-[60px] w-full'), className)}
        {...props}
      />
    </FormControl>
  );
});

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;
