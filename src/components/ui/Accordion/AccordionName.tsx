import { AccordionHeader, AccordionTrigger } from '@radix-ui/react-accordion';
import { IconChevronDown } from '@tabler/icons-react';

type Props = {
  children: React.ReactNode;
};

const AccordionName = ({ children }: Props) => {
  return (
    <AccordionHeader className='flex border-b border-gray-600'>
      <AccordionTrigger className='group flex h-10 flex-1 items-center justify-between px-4 font-medium outline-none'>
        {children}

        <IconChevronDown
          size={20}
          className='jtransition-transform ease-in-out group-data-[state=open]:rotate-180'
        />
      </AccordionTrigger>
    </AccordionHeader>
  );
};

export default AccordionName;
