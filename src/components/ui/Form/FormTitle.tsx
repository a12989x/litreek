import { forwardRef } from 'react';
import { cn } from '~/utils';

type Props = React.ComponentPropsWithoutRef<'h1'>;

const FormTitle = forwardRef<HTMLHeadingElement, Props>(
  ({ className, ...props }: Props) => {
    return <h1 className={cn('text-3xl font-bold', className)} {...props} />;
  }
);

FormTitle.displayName = 'FormTitle';

export default FormTitle;
