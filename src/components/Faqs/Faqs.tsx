import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/Accordion';

const faqs = [
  {
    name: 'What are the limits of the Free plan?',
    description:
      'The free plan gives you access to the free themes, limited social, block and embed links and 30 days of statics history.',
  },
  {
    name: "What's included in the Prop plan?",
    description:
      'The Pro plan gives you access to the paid themes, more social, block and embed links, 90 day of statics history, SEO features and removable branding.',
  },
];

const faqs2 = [
  {
    name: 'treek.link is secure?',
    description:
      "Yes, treek.link don't share your information with anyone, all your information is manageable only by you.",
  },
  {
    name: 'What payments method do you accept?',
    description: 'We accept credit and debit cards.',
  },
];

const defaultValues = faqs.map(({ name }) => name);
const defaultValues2 = faqs2.map(({ name }) => name);

const Faqs = () => {
  return (
    <section
      className='mx-auto flex min-h-[600px] max-w-screen-xl scroll-mt-10 flex-col items-center py-20 px-8'
      id='faq'
    >
      <h2 className='mb-4 text-5xl font-bold'>Frequently asked questions</h2>
      <p className='mb-8 text-2xl'>Need answers? Find them here...</p>

      <div className='flex w-full max-w-4xl gap-4'>
        <Accordion asChild defaultValue={defaultValues} type='multiple'>
          <ul className='space-y-4'>
            {faqs.map(({ name, description }) => (
              <AccordionItem key={name} asChild value={name}>
                <li>
                  <AccordionTrigger>{name}</AccordionTrigger>
                  <AccordionContent>
                    <p>{description}</p>
                  </AccordionContent>
                </li>
              </AccordionItem>
            ))}
          </ul>
        </Accordion>

        <Accordion asChild defaultValue={defaultValues2} type='multiple'>
          <ul className='space-y-4'>
            {faqs2.map(({ name, description }) => (
              <AccordionItem key={name} asChild value={name}>
                <li>
                  <AccordionTrigger>{name}</AccordionTrigger>
                  <AccordionContent>
                    <p>{description}</p>
                  </AccordionContent>
                </li>
              </AccordionItem>
            ))}
          </ul>
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
