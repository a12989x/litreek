import { forwardRef } from 'react';
import { DropdownMenuSeparator as RadixDropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import { cn } from '~/utils';

type Ref = React.ElementRef<typeof RadixDropdownMenuSeparator>;
type Props = React.ComponentPropsWithoutRef<typeof RadixDropdownMenuSeparator>;

const DropdownMenuSeparator = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => {
    return (
      <RadixDropdownMenuSeparator
        ref={ref}
        className={cn('-mx-1 my-1 h-px bg-gray-600', className)}
        {...props}
      />
    );
  }
);

DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export default DropdownMenuSeparator;
