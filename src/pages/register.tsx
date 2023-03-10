import { type NextPage } from 'next';

import { Form, Input, Link } from '~/components/ui';

const Register: NextPage = () => {
  return (
    <div className='mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center'>
      <Form>
        <Form.Container>
          <Form.Header>
            <Form.Title>Create Account</Form.Title>
            <Form.Description>
              Already have and account?{' '}
              <Link intent='underline' href='/login'>
                Login
              </Link>
            </Form.Description>
          </Form.Header>

          <Form.Items>
            <Form.Field name='email'>
              <Form.LabelWrapper>
                <Form.Label>Email</Form.Label>
                <Form.Message match='valueMissing'>
                  Please enter your name
                </Form.Message>
              </Form.LabelWrapper>
              <Form.Input
                type='email'
                placeholder='name@example.com'
                required
              />
            </Form.Field>

            <Form.Field name='password'>
              <Form.LabelWrapper>
                <Form.Label>Password</Form.Label>
                <Form.Message match='valueMissing'>
                  Please enter a password
                </Form.Message>
                <Form.Message match='tooShort'>
                  Your password is to short
                </Form.Message>
              </Form.LabelWrapper>
              <Form.Input
                type='password'
                id='password'
                minLength={5}
                placeholder='securepassword'
                required
              />
            </Form.Field>

            <div className='relative'>
              <div className='absolute left-0'>
                <label
                  className='flex h-10 items-center justify-center rounded-l-lg pl-4 font-medium'
                  htmlFor='link'
                >
                  treek.link/
                </label>
              </div>
              <Input
                type='text'
                id='link'
                className='w-full pl-[92.3167px]'
                placeholder='yourname'
              />
            </div>
          </Form.Items>

          <Form.Button>Sign Up with Email</Form.Button>
        </Form.Container>

        <Form.OrDivider />

        <Form.Items>
          <Form.GoogleButton>Sign Up with Google</Form.GoogleButton>
          <Form.GitHubButton>Sign Up with GitHub</Form.GitHubButton>
        </Form.Items>
      </Form>

      <p className='text-gray-1100 mx-auto mt-6 w-full max-w-md px-12 text-center text-sm'>
        By signing up, you agree to the{' '}
        <Link href='/terms' intent='underline'>
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href='privacy' intent='underline'>
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Register;
