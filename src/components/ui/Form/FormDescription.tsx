import { forwardRef } from 'react';

import { cn } from '~/utils';

type Props = React.ComponentPropsWithoutRef<'h2'>;

const FormDescription = forwardRef<HTMLHeadingElement, Props>(
  ({ className, ...props }, ref) => {
    return <h2 ref={ref} className={cn('', className)} {...props} />;
  }
);

FormDescription.displayName = 'FormDescription';

export default FormDescription;
