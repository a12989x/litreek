import { type NextPage } from 'next';

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

const Login: NextPage = () => {
  return (
    <div className='mx-auto flex w-full max-w-screen-xl items-center justify-center'>
      <Form>
        <FormContainer>
          <FormHeader>
            <FormTitle>Login</FormTitle>
            <FormDescription>
              Don&apos;t have an account?{' '}
              <Link intent='underline' href='/register'>
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
              <FormInput type='email' placeholder='name@example.com' required />
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
                type='password'
                placeholder='securepassword'
                minLength={5}
                required
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
