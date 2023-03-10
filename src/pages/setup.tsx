import { useState } from 'react';
import { type NextPage } from 'next';
import { Form } from '~/components/ui';
import { cn } from '~/utils';

const steps = [1, 2];

const Setup: NextPage = () => {
  const [step, setStep] = useState(steps[0]);

  return (
    <div className='relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center'>
      {step === 1 && (
        <Form onSubmit={() => setStep(steps[1])}>
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
                  </Form.LabelWrapper>
                  <Form.Input type='text' placeholder='First Last' required />
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
      )}

      {step === 2 && (
        <Form>
          <Form.Container>
            <Form.Header>
              <Form.Title>Almost there!</Form.Title>
              <Form.Description>
                Please add your location and some social links.
              </Form.Description>
            </Form.Header>

            <Form.Items>
              <Form.Field name='location'>
                <Form.LabelWrapper>
                  <Form.Label>Location</Form.Label>
                </Form.LabelWrapper>
                <Form.Input type='text' placeholder='LA, USA' />
              </Form.Field>

              <Form.Field name='instagram'>
                <Form.LabelWrapper>
                  <Form.Label>Instagram</Form.Label>
                </Form.LabelWrapper>
                <Form.Input type='text' placeholder='codingcodax' />
              </Form.Field>

              <Form.Field name='twitter'>
                <Form.LabelWrapper>
                  <Form.Label>Twitter</Form.Label>
                </Form.LabelWrapper>
                <Form.Input type='text' placeholder='shadcn' />
              </Form.Field>

              <Form.Field name='youtube'>
                <Form.LabelWrapper>
                  <Form.Label>YouTube</Form.Label>
                </Form.LabelWrapper>
                <Form.Input type='text' placeholder='t3dotgg' />
              </Form.Field>
            </Form.Items>

            <Form.Items direction='horizontal'>
              <Form.SecondaryButton onClick={() => setStep(1)}>
                Go back
              </Form.SecondaryButton>
              <Form.Button>Finalize</Form.Button>
            </Form.Items>
          </Form.Container>
        </Form>
      )}

      <div className='absolute bottom-8 flex gap-4'>
        {steps.map((stp) => (
          <button
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
