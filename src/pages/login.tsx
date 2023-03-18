import { type GetServerSideProps, type NextPage } from 'next';

import { getServerAuthSession } from '~/server/auth';

import {
  Form,
  FormButton,
  FormContainer,
  FormDescription,
  FormField,
  FormGitHubButton,
  FormGoogleButton,
  FormHeader,
  FormInput,
  FormItems,
  FormLabel,
  FormLabelWrapper,
  FormMessage,
  FormOrDivider,
  FormTitle,
} from '~/components/ui/Form';
import { Link } from '~/components/ui/Link';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (session)
    return {
      redirect: { destination: '/dashboard', permanent: false },
    };

  return { props: { session } };
};

const Login: NextPage = () => {
  return (
    <div className='mx-auto flex w-full max-w-screen-xl items-center justify-center'>
      <Form>
        <FormContainer>
          <FormHeader>
            <FormTitle>Login</FormTitle>
            <FormDescription>
              Don&apos;t have an account?{' '}
              <Link href='/register' intent='underline'>
                Sign Up
              </Link>
            </FormDescription>
          </FormHeader>

          <FormItems>
            <FormField name='email'>
              <FormLabelWrapper>
                <FormLabel>Email</FormLabel>
                <FormMessage match='valueMissing'>
                  Please enter your email
                </FormMessage>
                <FormMessage match='typeMismatch'>
                  Please provide a valid email
                </FormMessage>
              </FormLabelWrapper>
              <FormInput required placeholder='name@example.com' type='email' />
            </FormField>

            <FormField name='password'>
              <FormLabelWrapper>
                <FormLabel>Password</FormLabel>
                <FormMessage match='valueMissing'>
                  Please enter a password
                </FormMessage>
                <FormMessage match='tooShort'>
                  Your password is to short
                </FormMessage>
              </FormLabelWrapper>
              <FormInput
                required
                minLength={5}
                placeholder='securepassword'
                type='password'
              />
            </FormField>
          </FormItems>

          <FormButton>Log In with Email</FormButton>
        </FormContainer>

        <FormOrDivider />

        <FormItems>
          <FormGoogleButton>Log In with Google</FormGoogleButton>
          <FormGitHubButton>Log In with GitHub</FormGitHubButton>
        </FormItems>
      </Form>
    </div>
  );
};

export default Login;
