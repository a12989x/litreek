import { type NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { Button, Input, Link } from '~/components/ui';

const Register: NextPage = () => {
  return (
    <div className='mx-auto flex w-full max-w-screen-xl items-center justify-center'>
      <form className='border-grey-600 mx-auto w-full max-w-md rounded-lg border p-6'>
        <div className='space-y-6'>
          <div>
            <h1 className='text-3xl font-bold'>Create Account</h1>
            <h2>
              Already have and account? <Link href='/login'>Login</Link>
            </h2>
          </div>

          <div className='space-y-4'>
            <div>
              <Input type='text' placeholder='yourname' className='w-full' />
            </div>
            <div className='space-y-2'>
              <label htmlFor='email' className='font-medium'>
                Name
              </label>
              <Input
                id='email'
                type='email'
                placeholder='Email address'
                className='w-full'
              />
            </div>
            <div className='space-y-2'>
              <label htmlFor='password' className='font-medium'>
                Password
              </label>
              <Input
                id='password'
                type='password'
                placeholder='Choose a password'
                className='w-full'
              />
            </div>
          </div>

          <Button type='submit' className='w-full'>
            Sign Up with Email
          </Button>
        </div>

        <div className='my-8 grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4'>
          <div className='bg-grey-600 h-px' />
          <span>Or</span>
          <div className='bg-grey-600 h-px' />
        </div>

        <div className='space-y-4'>
          <Button
            type='button'
            onClick={() => signIn('google', { callbackUrl: '/' })}
            intent='ghost'
            className='w-full'
          >
            Sign Up with Google
          </Button>
          <Button
            type='button'
            onClick={() => signIn('github', { callbackUrl: '/' })}
            intent='ghost'
            className='w-full'
          >
            Sign Up with GitHub
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
