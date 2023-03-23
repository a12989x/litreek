import { forwardRef } from 'react';
import { cn } from '~/utils';

type Props = React.ComponentPropsWithoutRef<'div'> & {
  direction?: 'vertical' | 'horizontal';
};

const FormItems = forwardRef<HTMLDivElement, Props>(
  ({ direction = 'vertical', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex gap-4',
          direction === 'vertical' ? 'flex-col' : '',
          direction === 'horizontal' ? 'flex-row' : '',
          className
        )}
        {...props}
      />
    );
  }
);

FormItems.displayName = 'FormItems';

export default FormItems;
