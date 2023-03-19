import { type FormEventHandler } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { type User } from '~/types';
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
  FormLabel,
  FormLabelWrapper,
  FormMessage,
  FormTextarea,
  FormTitle,
  FormUsername,
} from '~/components/ui/Form';

interface Props extends User {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const BasicInfo = ({
  image,
  name,
  username,
  bio,
  location,
  onSubmit,
}: Props) => {
  const { data: sessionData } = useSession();
  const { data, isLoading } = api.user.get.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  const currentImage = image
    ? image
    : data?.image ?? 'https://avatar.vercel.sh/treek.link';
  const currentName = name ? name : data?.name ?? '';
  const currentUsername = username ? username : data?.username ?? '';
  const currentBio = bio ? bio : data?.bio ?? '';
  const currentLocation = location ? location : data?.location ?? '';

  return (
    <Form onSubmit={onSubmit}>
      <FormContainer>
        <FormHeader>
          <FormTitle>Let&apos;s get started!</FormTitle>
          <FormDescription>
            This information will appear on your{' '}
            <span className='font-medium'>treek</span> page.
          </FormDescription>
        </FormHeader>

        <FormItems>
          <div className='flex space-x-4'>
            <Image
              alt='user profile'
              className={cn(
                'h-[72px] w-full max-w-[72px] rounded-full bg-gray-300',
                isLoading ? 'animate-pulse' : ''
              )}
              height={100}
              src={currentImage}
              width={100}
            />
            <FormField name='name'>
              <FormLabelWrapper>
                <FormLabel>Name</FormLabel>
                <FormMessage match='valueMissing'>
                  Please provide a name
                </FormMessage>

                <FormMessage match='tooShort'>
                  Your name needs to be at least 4 chars
                </FormMessage>
              </FormLabelWrapper>
              <FormInput
                required
                defaultValue={currentName}
                disabled={isLoading}
                minLength={4}
                placeholder='First Last'
                type='text'
              />
            </FormField>
          </div>

          <FormField name='username'>
            <FormLabelWrapper>
              <FormLabel htmlFor='username'>Username</FormLabel>
              <FormMessage match='valueMissing'>
                Please provide a username
              </FormMessage>
              <FormMessage match='tooShort'>
                Your username needs to be at least 4 chars
              </FormMessage>
            </FormLabelWrapper>
            <FormUsername
              required
              defaultValue={currentUsername}
              disabled={isLoading}
              minLength={4}
              placeholder='yourname'
            />
          </FormField>

          <FormField name='bio'>
            <FormLabelWrapper>
              <FormLabel>Bio</FormLabel>
            </FormLabelWrapper>
            <FormTextarea
              className='max-h-28 min-h-[60px] w-full'
              defaultValue={currentBio}
              disabled={isLoading}
              placeholder='UI/UX Designer'
            />
          </FormField>

          <FormField name='location'>
            <FormLabelWrapper>
              <FormLabel>Location</FormLabel>
            </FormLabelWrapper>
            <FormInput
              defaultValue={currentLocation}
              placeholder='San Francisco, CA'
              type='text'
            />
          </FormField>
        </FormItems>
        <FormButton>Continue</FormButton>
      </FormContainer>
    </Form>
  );
};

export default BasicInfo;
