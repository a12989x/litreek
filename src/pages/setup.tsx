import { type NextPage } from 'next';
import { Button, Input, Textarea } from '~/components/ui';

const Setup: NextPage = () => {
  return (
    <div className='mx-auto flex w-full max-w-screen-xl items-center justify-center'>
      <form className='mx-auto w-full max-w-md p-6'>
        <div className='space-y-6'>
          <div>
            <h1 className='text-3xl font-bold'>Let&apos;s get started!</h1>
            <p className='text-grey-1100'>
              You can customize your page with links and content embed.
            </p>
          </div>

          <div className='space-y-4'>
            <div className='flex space-x-4'>
              <div className='bg-grey-300 h-[72px] w-full max-w-[72px] rounded-full' />
              <div className='space-y-2'>
                <label htmlFor='name' className='font-medium'>
                  Name
                </label>
                <Input
                  className='w-full'
                  type='text'
                  id='name'
                  placeholder='First Last'
                />
              </div>
            </div>
            <div>
              <label htmlFor='bio' className='font-medium'>
                Bio
              </label>
              <Textarea
                id='bio'
                className='max-h-28 min-h-[60px] w-full'
                placeholder='UI/UX Designer'
              />
            </div>
          </div>

          <Button type='submit' className='w-full'>
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Setup;
