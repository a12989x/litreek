import { forwardRef } from 'react';
import { AccordionItem as RadixAccordionItem } from '@radix-ui/react-accordion';
import { cn } from '~/utils';

type Ref = React.ElementRef<typeof RadixAccordionItem>;
type Props = React.ComponentPropsWithoutRef<typeof RadixAccordionItem>;

const AccordionItem = forwardRef<Ref, Props>(({ className, ...props }, ref) => {
  return (
    <RadixAccordionItem
      ref={ref}
      className={cn(
        'w-full max-w-md rounded-lg border border-gray-600 focus-within:ring focus-within:ring-indigo-800',
        className
      )}
      {...props}
    />
  );
});

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
