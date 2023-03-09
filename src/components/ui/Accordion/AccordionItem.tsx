import { AccordionItem as RadixAccordionItem } from '@radix-ui/react-accordion';

type Props = {
  value: string;
  children: React.ReactNode;
};

const AccordionItem = ({ value, children }: Props) => {
  return (
    <RadixAccordionItem
      value={value}
      className='w-full max-w-md rounded-lg border border-gray-600 focus-within:ring focus-within:ring-indigo-800'
      disabled
      asChild
    >
      <li>{children}</li>
    </RadixAccordionItem>
  );
};

export default AccordionItem;
