import { type FormEventHandler } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { cn } from '~/utils';

import { Form } from '~/components/ui';

type Props = {
  image: FormDataEntryValue;
  name: FormDataEntryValue;
  username: FormDataEntryValue;
  bio: FormDataEntryValue;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const BasicInfo = ({ image, name, username, bio, onSubmit }: Props) => {
  const { data, status } = useSession();

  const isLoading = status === 'loading' ? true : false;
  const currentImage = image ? image.toString() : data?.user.image ?? '';
  const currentName = name ? name.toString() : data?.user.name ?? '';
  const currentUsername = username
    ? username.toString()
    : data?.user.username ?? '';
  const currentBio = bio ? bio.toString() : data?.user.bio ?? '';

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
            <Image
              alt='user profile'
              width={100}
              height={100}
              src={currentImage}
              className={cn(
                'h-[72px] w-full max-w-[72px] rounded-full bg-gray-300',
                isLoading ? 'animate-pulse' : ''
              )}
            />
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
                defaultValue={currentName}
                placeholder='First Last'
                minLength={4}
                disabled={isLoading}
                required
              />
            </Form.Field>
          </div>

          <Form.Field name='username'>
            <Form.LabelWrapper>
              <Form.Label htmlFor='username'>Username</Form.Label>
              <Form.Message match='valueMissing'>
                Please provide a username
              </Form.Message>
              <Form.Message match='tooShort'>
                Your username needs to be at least 4 chars
              </Form.Message>
            </Form.LabelWrapper>
            <Form.Username
              defaultValue={currentUsername}
              disabled={isLoading}
            />
          </Form.Field>

          <Form.Field name='bio'>
            <Form.LabelWrapper>
              <Form.Label>Bio</Form.Label>
            </Form.LabelWrapper>
            <Form.Textarea
              className='max-h-28 min-h-[60px] w-full'
              placeholder='UI/UX Designer'
              defaultValue={currentBio}
              disabled={isLoading}
            />
          </Form.Field>
        </Form.Items>
        <Form.Button>Continue</Form.Button>
      </Form.Container>
    </Form>
  );
};

export default BasicInfo;
