import { forwardRef } from 'react';
import {
  DropdownMenuContent as RadixDropdownMenuContent,
  DropdownMenuPortal as RadixDropdownMenuPortal,
} from '@radix-ui/react-dropdown-menu';
import { cn } from '~/utils';

type Ref = React.ElementRef<typeof RadixDropdownMenuContent>;
type Props = React.ComponentPropsWithoutRef<typeof RadixDropdownMenuContent>;

const DropdownMenuContent = forwardRef<Ref, Props>(
  ({ className, sideOffset = 4, ...props }, ref) => {
    return (
      <RadixDropdownMenuPortal>
        <RadixDropdownMenuContent
          ref={ref}
          className={cn(
            'z-20 min-w-[8rem] overflow-hidden rounded-lg border border-gray-600 bg-gray-100 p-1 shadow',
            className
          )}
          sideOffset={sideOffset}
          {...props}
        />
      </RadixDropdownMenuPortal>
    );
  }
);

DropdownMenuContent.displayName = 'DropdownMenuContent';

export default DropdownMenuContent;
