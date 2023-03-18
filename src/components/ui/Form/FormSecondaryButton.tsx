import { forwardRef } from 'react';
import { FormSubmit } from '@radix-ui/react-form';
import { cn } from '~/utils';

import { Button, type Props as ButtonProps } from '~/components/ui/Button';

type Ref = React.ElementRef<typeof FormSubmit>;
type Props = ButtonProps;

const FormSecondaryButton = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => {
    return (
      <FormSubmit ref={ref} asChild>
        <Button
          className={(cn('w-full'), className)}
          intent='ghost'
          {...props}
        />
      </FormSubmit>
    );
  }
);

FormSecondaryButton.displayName = 'FormSecondaryButton';

export default FormSecondaryButton;
