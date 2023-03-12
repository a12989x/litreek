import { useState, type FormEvent } from 'react';
import { type NextPage } from 'next';
import { cn } from '~/utils';

import { AdditionalInfo, BasicInfo } from '~/components/Forms';

const steps = [1, 2];

type InfoType = {
  image: FormDataEntryValue;
  name: FormDataEntryValue;
  username: FormDataEntryValue;
  bio: FormDataEntryValue;
  location: FormDataEntryValue;
  instagram: FormDataEntryValue;
  twitter: FormDataEntryValue;
  youtube: FormDataEntryValue;
};

const Setup: NextPage = () => {
  const [step, setStep] = useState(steps[0]);
  const [info, setInfo] = useState<InfoType>({
    image: '',
    name: '',
    username: '',
    bio: '',
    location: '',
    instagram: '',
    twitter: '',
    youtube: '',
  });

  const handleSubmitOne = (event: FormEvent<HTMLFormElement>) => {
    const data = Object.fromEntries(new FormData(event.currentTarget));

    setInfo((prev) => ({ ...prev, ...data }));
    setStep(steps[1]);
  };

  const handleGoBack = () => {
    setStep(steps[0]);
  };

  const handleSubmitTwo = (event: FormEvent<HTMLFormElement>) => {
    const data = Object.fromEntries(new FormData(event.currentTarget));

    setInfo((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className='relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center'>
      {step === 1 && <BasicInfo onSubmit={handleSubmitOne} {...info} />}

      {step === 2 && (
        <AdditionalInfo onSubmit={handleSubmitTwo} onGoBack={handleGoBack} />
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
