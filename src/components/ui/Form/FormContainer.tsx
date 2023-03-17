import { forwardRef } from 'react';
import { cn } from '~/utils';

type Props = React.ComponentPropsWithoutRef<'div'>;

const FormContainer = forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-6', className)} {...props}>
        {children}
      </div>
    );
  }
);

FormContainer.displayName = 'FormContainer';

export default FormContainer;
