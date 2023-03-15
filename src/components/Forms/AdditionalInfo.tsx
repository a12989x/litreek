import { type FormEventHandler, type MouseEventHandler } from 'react';
import { useSession } from 'next-auth/react';
import { socials as socialsData } from '~/data';

import { api } from '~/utils/api';
import { Form } from '~/components/ui';

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
      <Form.Container>
        <Form.Header>
          <Form.Title>Almost there!</Form.Title>
          <Form.Description>Please add some social links.</Form.Description>
        </Form.Header>

        <Form.Items>
          {socialsData.slice(0, 4).map(({ name, placeholder }) => (
            <Form.Field key={name} name={name}>
              <Form.LabelWrapper>
                <Form.Label>{name}</Form.Label>
              </Form.LabelWrapper>
              <Form.Input
                type='text'
                placeholder={placeholder}
                defaultValue={
                  socialsState
                    ? 'from state'
                    : socialsResponse?.find((social) => social.name === name)
                        ?.url
                }
              />
            </Form.Field>
          ))}
        </Form.Items>

        <Form.Items direction='horizontal'>
          <Form.SecondaryButton type='button' onClick={onGoBack}>
            Go back
          </Form.SecondaryButton>
          <Form.Button>Finalize</Form.Button>
        </Form.Items>
      </Form.Container>
    </Form>
  );
};

export default AdditionalInfo;
