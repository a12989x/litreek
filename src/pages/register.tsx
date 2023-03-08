import { type NextPage } from 'next';
import { Form, Link } from '~/components/ui';

const Register: NextPage = () => {
  return (
    <div className='mx-auto flex w-full max-w-screen-xl items-center justify-center'>
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
            <Form.InputWrapper>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Input
                type='email'
                id='email'
                placeholder='name@example.com'
              />
            </Form.InputWrapper>

            <Form.InputWrapper>
              <Form.Label htmlFor='password'>Password</Form.Label>
              <Form.Input
                type='password'
                id='password'
                placeholder='securepassword'
              />
            </Form.InputWrapper>
          </Form.Items>

          <Form.Button>Sign Up with Email</Form.Button>
        </Form.Container>

        <Form.OrDivider />

        <Form.Items>
          <Form.GoogleButton>Sign Up with Google</Form.GoogleButton>
          <Form.GitHubButton>Sign Up with GitHub</Form.GitHubButton>
        </Form.Items>
      </Form>
    </div>
  );
};

export default Register;
