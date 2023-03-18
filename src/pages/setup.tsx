import { useState, type FormEvent } from 'react';
import { type GetServerSideProps, type NextPage } from 'next';
import { useRouter } from 'next/router';
import { socials as socialsData } from '~/data';
import { type User } from '~/types';
import { cn } from '~/utils';

import { getServerAuthSession } from '~/server/auth';
import { api } from '~/utils/api';
import { AdditionalInfo, BasicInfo } from '~/components/Forms';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (!session)
    return {
      redirect: { destination: '/login', permanent: false },
    };

  return { props: { session } };
};

const steps = [1, 2];

const Setup: NextPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(steps[0]);
  const [user, setUser] = useState<User>({ image: '', name: '', username: '' });
  const [socials, setSocials] = useState<{ [k: string]: string }>();

  const { mutate: updateUser } = api.user.update.useMutation({
    onSuccess: () => {
      console.log('User succesfully updated!');
    },
    onError: () => {
      console.log('User cannot be updated!');
    },
  });

  const { mutate: upsertSocial } = api.social.upsert.useMutation({
    onSuccess: () => {
      console.log('Social succesfully updated/created!');
    },
    onError: () => {
      console.log('Social cannot be updated/created!');
    },
  });

  const handleSubmitOne = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget)) as User;

    setUser(data);
    setStep(steps[1]);
  };

  const handleGoBack = () => {
    setStep(steps[0]);
  };

  const handleSubmitTwo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget)) as {
      [k: string]: string;
    };
    const socialsCreated = socialsData.map(
      ({ baseUrl, name, thumbnail }, index) => ({
        url: `${baseUrl}${data[name]?.toString() ?? ''}`,
        type: 'social',
        name,
        thumbnail,
        position: index + 1,
      })
    );

    try {
      setSocials(data);

      updateUser(user);

      socialsCreated.map((social) => {
        upsertSocial(social);
      });

      void router.push('/dashboard');
    } catch (error) {
      throw new Error('Something went wrong!');
    }
  };

  return (
    <div className='relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center'>
      {step === 1 && <BasicInfo onSubmit={handleSubmitOne} {...user} />}

      {step === 2 && (
        <AdditionalInfo
          onSubmit={handleSubmitTwo}
          onGoBack={handleGoBack}
          socialsState={socials}
        />
      )}

      <div className='absolute bottom-8 flex gap-4'>
        {steps.map((stp) => (
          <button
            key={stp}
            className={cn(
              'h-3 w-3 rounded-full border border-gray-700 bg-gray-400',
              stp === step ? 'bg-gray-1200 hover:bg-gray=1200 w-8' : ''
            )}
            disabled
          />
        ))}
      </div>
    </div>
  );
};

export default Setup;
