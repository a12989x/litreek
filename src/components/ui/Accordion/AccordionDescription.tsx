import { AccordionContent } from '@radix-ui/react-accordion';

type Props = {
  children: React.ReactNode;
};

const AccordionDescription = ({ children }: Props) => {
  return (
    <AccordionContent className='data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up text-gray-1100 overflow-hidden'>
      <p className='px-4 py-2'>{children}</p>
    </AccordionContent>
  );
};

export default AccordionDescription;
