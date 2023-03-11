import { useState, type FormEvent } from 'react';
import { type NextPage } from 'next';
import { cn } from '~/utils';

import AdditionalInfo from '~/components/Forms/AdditionalInfo';
import BasicInfo from '~/components/Forms/BasicInfo';

const steps = [1, 2];

type InfoType = {
  name: FormDataEntryValue;
  link: FormDataEntryValue;
  bio: FormDataEntryValue;
};

const Setup: NextPage = () => {
  const [step, setStep] = useState(steps[0]);
  const [, setInfo] = useState<InfoType>({
    name: '',
    link: '',
    bio: '',
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
      {step === 1 && <BasicInfo onSubmit={handleSubmitOne} />}

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
