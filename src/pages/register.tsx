import { type NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { GitHubIcon, GoogleIcon } from '~/components/icons';
import { Button, Input, Link } from '~/components/ui';

const Register: NextPage = () => {
  return (
    <div className='mx-auto flex w-full max-w-screen-xl items-center justify-center'>
      <form className='mx-auto w-full max-w-md rounded-lg border border-gray-600 p-6'>
        <div className='space-y-6'>
          <div>
            <h1 className='text-3xl font-bold'>Create Account</h1>
            <h2>
              Already have and account? <Link href='/login'>Login</Link>
            </h2>
          </div>

          <div className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor='link' className='font-medium'>
                litreek.link/
              </label>
              <Input
                type='text'
                id='link'
                placeholder='yourname'
                className='w-full'
              />
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
          <div className='h-px bg-gray-600' />
          <span>Or</span>
          <div className='h-px bg-gray-600' />
        </div>

        <div className='space-y-4'>
          <Button
            type='button'
            onClick={() => signIn('google', { callbackUrl: '/' })}
            intent='ghost'
            className='w-full space-x-2'
          >
            <GoogleIcon className='h-4 w-4' /> <span>Sign Up with Google</span>
          </Button>
          <Button
            type='button'
            onClick={() => signIn('github', { callbackUrl: '/' })}
            intent='ghost'
            className='w-full space-x-2'
          >
            <GitHubIcon className='h-4 w-4' /> <span>Sign Up with GitHub</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;