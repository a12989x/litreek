import { useState, type FormEvent } from 'react';
import { type GetServerSideProps, type NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
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
  const { data: sessionData } = useSession();
  const [step, setStep] = useState(steps[0]);
  const [user, setUser] = useState<User>({ image: '', name: '', username: '' });
  const [socials, setSocials] = useState<{ [k: string]: string }>();

  const { mutate: updateUser } = api.user.update.useMutation({
    onSuccess: () => {
      console.log('User succesfully updated!');
    },
    onError: () => {
      console.error('User cannot be updated!');
    },
  });

  const { mutate: updateUsername } = api.user.updateUsername.useMutation({
    onSuccess: () => {
      console.log('Username succesfully updated!');
    },
    onError: () => {
      console.error('Username cannot be updated!');
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

  const updateImage = (dataUrl: string) =>
    setUser((prev) => ({ ...prev, image: dataUrl }));

  const handleSubmitOne = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { image, ...data } = Object.fromEntries(
      new FormData(event.currentTarget)
    ) as User & { image: File };

    if (image.name) {
      try {
        const formData = new FormData();

        formData.append('file', image);
        formData.append('upload_preset', 'Litreek');
        formData.append('timestamp', (Date.now() / 1000).toString());

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/codingcodax/image/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );

        const { url } = (await res.json()) as { url: string };

        setUser((prev) => ({ ...prev, image: url }));
      } catch (error) {
        console.error('Something went wrong! Try it again');
      }
    }

    setUser((prev) => ({ ...prev, ...data }));
    updateUsername({ username: data.username });
    setStep(steps[1]);
  };

  const handleGoBack = () => {
    setStep(steps[0]);
  };

  const handleSubmitTwo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget)) as {
      [k: string]: string;
    };
    const socialsCreated = socialsData.map(({ baseUrl, name }, index) => ({
      url: `${baseUrl}${data[name]?.toString() ?? ''}`,
      type: 'social',
      name,
      position: index + 1,
    }));

    try {
      setSocials(data);

      updateUser({
        ...user,
        image: user.image ? user.image : sessionData?.user.image ?? '',
      });

      socialsCreated.map((social) => {
        upsertSocial(social);
      });

      await router.push('/dashboard');
    } catch (error) {
      throw new Error('Something went wrong!');
    }
  };

  return (
    <div className='relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center'>
      {step === 1 && (
        <BasicInfo
          updateImage={updateImage}
          onSubmit={handleSubmitOne}
          {...user}
        />
      )}

      {step === 2 && (
        <AdditionalInfo
          socialsState={socials}
          onGoBack={handleGoBack}
          onSubmit={handleSubmitTwo}
        />
      )}

      <div className='absolute bottom-8 flex gap-4'>
        {steps.map((stp) => (
          <button
            key={stp}
            disabled
            className={cn(
              'h-3 w-3 rounded-full border border-gray-700 bg-gray-400',
              stp === step ? 'bg-gray-1200 hover:bg-gray=1200 w-8' : ''
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Setup;
