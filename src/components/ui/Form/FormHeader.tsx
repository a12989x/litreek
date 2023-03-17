import { forwardRef } from 'react';

type Props = React.ComponentPropsWithoutRef<'div'>;

const FormHeader = forwardRef<HTMLDivElement, Props>(({ ...props }, ref) => {
  return <div ref={ref} {...props} />;
});

FormHeader.displayName = 'FormHeader';

export default FormHeader;
