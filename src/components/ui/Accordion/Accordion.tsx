import { Accordion as RadixAccordion } from '@radix-ui/react-accordion';

import AccordionDescription from './AccordionDescription';
import AccordionItem from './AccordionItem';
import AccordionName from './AccordionName';

type Props = {
  defaultValue?: string[];
  children: React.ReactNode;
};

const Accordion = ({ defaultValue, children }: Props) => {
  return (
    <RadixAccordion
      type='multiple'
      defaultValue={defaultValue}
      className='flex w-full flex-col gap-4'
      asChild
    >
      <ul>{children}</ul>
    </RadixAccordion>
  );
};

Accordion.Item = AccordionItem;
Accordion.Name = AccordionName;
Accordion.Description = AccordionDescription;

export default Accordion;
