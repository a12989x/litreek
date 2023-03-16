import { forwardRef } from 'react';
import { DropdownMenuLabel as RadixDropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { cn } from '~/utils';

type Ref = React.ElementRef<typeof RadixDropdownMenuLabel>;
type Props = React.ComponentPropsWithoutRef<typeof RadixDropdownMenuLabel>;

const DropdownMenuLabel = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => {
    return (
      <RadixDropdownMenuLabel
        ref={ref}
        className={cn('px-2 py-1.5 text-sm font-medium', className)}
        {...props}
      />
    );
  }
);

DropdownMenuLabel.displayName = 'DropdownMenuLabel';

export default DropdownMenuLabel;
