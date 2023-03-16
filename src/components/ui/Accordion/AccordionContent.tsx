import { forwardRef } from 'react';
import { AccordionContent as RadixAccordionContent } from '@radix-ui/react-accordion';
import { cn } from '~/utils';

type Ref = React.ElementRef<typeof RadixAccordionContent>;
type Props = React.ComponentPropsWithoutRef<typeof RadixAccordionContent>;

const AccordionContent = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <RadixAccordionContent
        ref={ref}
        className={cn(
          'data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up text-gray-1100 overflow-hidden',
          className
        )}
        {...props}
      >
        <div className='px-4 py-2'>{children}</div>
      </RadixAccordionContent>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';

export default AccordionContent;
