import { type FormEvent } from 'react';
import { type NextPage } from 'next';
import { FormControl } from '@radix-ui/react-form';
import { Label } from '@radix-ui/react-label';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';
import { socials as socialsData } from '~/data';
import { cn } from '~/utils';

import { api } from '~/utils/api';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/Accordion';
import {
  Form,
  FormButton,
  FormContainer,
  FormField,
  FormInput,
  FormItems,
} from '~/components/ui/Form';
import { Link } from '~/components/ui/Link';

const Links: NextPage = () => {
  const { data: sessionData } = useSession();
  const { data: socialsResponse } = api.social.getAll.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget)) as {
      [k: string]: string;
    };

    console.log(data);
  };

  return (
    <div className='relative mx-auto grid w-full max-w-screen-xl grid-cols-3 px-8'>
      <div className='col-span-2'>
        <nav className='border-b border-b-gray-600'>
          <ul className='flex space-x-6 pb-2'>
            <li>
              <Link href='/dashboard/links' intent='nav'>
                Links
              </Link>
            </li>
            <li>
              <Link href='/dashboard/design' intent='nav'>
                Design
              </Link>
            </li>
            <li>
              <Link href='/dashboard/stats' intent='nav'>
                Stats
              </Link>
            </li>
            <li>
              <Link href='/dashboard/settings' intent='nav'>
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        <div className='mt-6'>
          <div>
            <Accordion collapsible type='single'>
              <AccordionItem className='!max-w-[inherit]' value='manage'>
                <AccordionTrigger>Manage Links</AccordionTrigger>
                <AccordionContent>
                  <Form
                    className='mx-0 !max-w-[inherit] border-none px-0 py-2'
                    onSubmit={handleSubmit}
                  >
                    <FormContainer>
                      <FormItems>
                        {socialsData.map(
                          ({ name, baseUrl, placeholder, thumbnail }) => (
                            <div
                              key={name}
                              className='text-gray-1200 grid w-full grid-cols-[auto_1fr] gap-x-4'
                            >
                              <FormField name={`${name}IsVisible`}>
                                <FormControl
                                  className='peer sr-only'
                                  defaultChecked={
                                    socialsResponse?.find(
                                      (social) => social.name === name
                                    )?.visible
                                  }
                                  id={`${name}IsVisible`}
                                  type='checkbox'
                                />
                                <Label
                                  className='hidden cursor-pointer peer-checked:inline-block'
                                  htmlFor={`${name}IsVisible`}
                                >
                                  <IconEye size={24} />
                                </Label>
                                <Label
                                  className='inline-block cursor-pointer peer-checked:hidden'
                                  htmlFor={`${name}IsVisible`}
                                >
                                  <IconEyeOff size={24} />
                                </Label>
                              </FormField>

                              <FormField name={name}>
                                <div className='relative w-full'>
                                  <Label
                                    className='absolute left-0 flex h-10 items-center pl-4 font-medium'
                                    htmlFor={name}
                                  >
                                    {thumbnail}
                                  </Label>
                                  <FormInput
                                    className={cn('w-full pl-[46px]')}
                                    defaultValue={
                                      socialsResponse
                                        ?.find((social) => social.name === name)
                                        ?.url.split(baseUrl)[1]
                                    }
                                    id={name}
                                    placeholder={placeholder}
                                    type='text'
                                  />
                                </div>
                              </FormField>
                            </div>
                          )
                        )}
                      </FormItems>

                      <FormItems>
                        <FormButton>Update</FormButton>
                      </FormItems>
                    </FormContainer>
                  </Form>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <button>Add header</button>
            <button>Add link</button>
            <button>Add embed</button>
          </div>
        </div>
      </div>

      <div>Preview</div>
    </div>
  );
};

export default Links;
