import { type FormEventHandler, type MouseEventHandler } from 'react';
import { Label } from '@radix-ui/react-label';
import { useSession } from 'next-auth/react';
import { socials as socialsData } from '~/data';
import { cn } from '~/utils';

import { api } from '~/utils/api';
import {
  Form,
  FormButton,
  FormContainer,
  FormDescription,
  FormField,
  FormHeader,
  FormInput,
  FormItems,
  FormSecondaryButton,
  FormTitle,
} from '~/components/ui/Form';

type Props = {
  socialsState?: { [k: string]: string };
  onSubmit: FormEventHandler<HTMLFormElement>;
  onGoBack?: MouseEventHandler<HTMLButtonElement> &
    MouseEventHandler<HTMLAnchorElement>;
};

const AdditionalInfo = ({ socialsState, onSubmit, onGoBack }: Props) => {
  const { data: sessionData } = useSession();
  const { data: socialsResponse } = api.social.getAll.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  return (
    <Form onSubmit={onSubmit}>
      <FormContainer>
        <FormHeader>
          <FormTitle>Almost there!</FormTitle>
          <FormDescription>Please add some social links.</FormDescription>
        </FormHeader>

        <FormItems>
          {socialsData.slice(0, 4).map(({ name, placeholder, thumbnail }) => (
            <FormField key={name} name={name}>
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
                    socialsState
                      ? socialsState[name]
                      : socialsResponse?.find((social) => social.name === name)
                          ?.url
                  }
                  id={name}
                  placeholder={placeholder}
                  type='text'
                />
              </div>
            </FormField>
          ))}
        </FormItems>

        <FormItems direction='horizontal'>
          <FormSecondaryButton
            className='w-full'
            type='button'
            onClick={onGoBack}
          >
            Go back
          </FormSecondaryButton>
          <FormButton>Finalize</FormButton>
        </FormItems>
      </FormContainer>
    </Form>
  );
};

export default AdditionalInfo;
