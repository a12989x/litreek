import { forwardRef } from 'react';
import { cn } from '~/utils';

type Props = React.ComponentPropsWithoutRef<'div'>;

const FormLabelWrapper = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-baseline justify-between', className)}
        {...props}
      />
    );
  }
);

FormLabelWrapper.displayName = 'FormLabelWrapper';

export default FormLabelWrapper;
