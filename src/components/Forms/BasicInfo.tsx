import { useSession } from 'next-auth/react';
import { type FormEventHandler } from 'react';

import { Form } from '~/components/ui';

type Props = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const BasicInfo = ({ onSubmit }: Props) => {
  const { data } = useSession();

  return (
    <Form onSubmit={onSubmit}>
      <Form.Container>
        <Form.Header>
          <Form.Title>Let&apos;s get started!</Form.Title>
          <Form.Description>
            This information will appear on your{' '}
            <span className='font-medium'>treek</span> page.
          </Form.Description>
        </Form.Header>

        <Form.Items>
          <div className='flex space-x-4'>
            <div className='h-[72px] w-full max-w-[72px] rounded-full bg-gray-300' />
            <Form.Field name='name'>
              <Form.LabelWrapper>
                <Form.Label>Name</Form.Label>
                <Form.Message match='valueMissing'>
                  Please provide a name
                </Form.Message>

                <Form.Message match='tooShort'>
                  Your name needs to be at least 4 chars
                </Form.Message>
              </Form.LabelWrapper>
              <Form.Input
                type='text'
                defaultValue={data?.user.name ?? ''}
                placeholder='First Last'
                minLength={4}
                required
              />
            </Form.Field>
          </div>

          <Form.Field name='link'>
            <Form.LabelWrapper>
              <Form.Label>Username</Form.Label>
              <Form.Message match='valueMissing'>
                Please choose your link
              </Form.Message>
              <Form.Message match='tooShort'>
                Your link needs to be at least 4 chars
              </Form.Message>
            </Form.LabelWrapper>
            <Form.Input
              type='text'
              placeholder='codingcodax'
              minLength={4}
              required
            />
          </Form.Field>

          <Form.Field name='bio'>
            <Form.LabelWrapper>
              <Form.Label>Bio</Form.Label>
            </Form.LabelWrapper>
            <Form.Textarea
              className='max-h-28 min-h-[60px] w-full'
              placeholder='UI/UX Designer'
            />
          </Form.Field>
        </Form.Items>
        <Form.Button>Continue</Form.Button>
      </Form.Container>
    </Form>
  );
};

export default BasicInfo;
