import { forwardRef } from 'react';
import {
  AccordionHeader,
  AccordionTrigger as RadixAccordionTrigger,
} from '@radix-ui/react-accordion';
import { IconChevronDown } from '@tabler/icons-react';
import { cn } from '~/utils';

type Ref = React.ElementRef<typeof RadixAccordionTrigger>;
type Props = React.ComponentPropsWithoutRef<typeof RadixAccordionTrigger>;

const AccordionTrigger = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <AccordionHeader className='flex border-b border-gray-600'>
        <RadixAccordionTrigger
          ref={ref}
          className={cn(
            'group flex h-10 flex-1 items-center justify-between px-4 font-medium outline-none',
            className
          )}
          {...props}
        >
          {children}

          <IconChevronDown
            size={20}
            className='transition-transform ease-in-out group-data-[state=open]:rotate-180'
          />
        </RadixAccordionTrigger>
      </AccordionHeader>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

export default AccordionTrigger;
