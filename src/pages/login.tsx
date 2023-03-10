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
              Don&apos;t have an account?{' '}
              <Link intent='underline' href='/register'>
                Sign Up
              </Link>
            </Form.Description>
          </Form.Header>

          <Form.Items>
            <Form.Field name='email'>
              <Form.LabelWrapper>
                <Form.Label>Email</Form.Label>
                <Form.Message match='valueMissing'>
                  Please enter your email
                </Form.Message>
                <Form.Message match='typeMismatch'>
                  Please provide a valid email
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
                placeholder='securepassword'
                minLength={5}
                required
              />
            </Form.Field>
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
