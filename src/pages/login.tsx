import { type NextPage } from 'next';
import { Form, Link } from '~/components/ui';

const Login: NextPage = () => {
  return (
    <div className='mx-auto flex w-full max-w-screen-xl items-center justify-center'>
      <Form>
        <Form.Container>
          <Form.Header>
            <Form.Title>Login</Form.Title>
            <Form.Description>
              Don&apos;t have an account? <Link href='/register'>Sign Up</Link>
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

          <Form.Button>Log In with Email</Form.Button>
        </Form.Container>

        <Form.OrDivider />

        <Form.Items>
          <Form.GoogleButton>Log In with Google</Form.GoogleButton>
          <Form.GitHubButton>Log In with GitHub</Form.GitHubButton>
        </Form.Items>
      </Form>
    </div>
  );
};

export default Login;
