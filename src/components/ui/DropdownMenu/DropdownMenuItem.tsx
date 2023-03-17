import { forwardRef } from 'react';
import { DropdownMenuItem as RadixDropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { cn } from '~/utils';

type Ref = React.ElementRef<typeof RadixDropdownMenuItem>;
type Props = React.ComponentPropsWithoutRef<typeof RadixDropdownMenuItem>;

const DropdownMenuItem = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => {
    return (
      <RadixDropdownMenuItem
        ref={ref}
        className={cn(
          'relative flex select-none items-center rounded-md py-1.5 px-2 text-sm',
          'data-[highlighted]:bg-gray-400 data-[highlighted]:outline-none',
          className
        )}
        {...props}
      />
    );
  }
);

DropdownMenuItem.displayName = 'DropdownMenuItem';

export default DropdownMenuItem;
