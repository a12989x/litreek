import { signIn } from 'next-auth/react';

import { GoogleIcon } from '~/components/icons';
import { Button } from '~/components/ui/Button';

type Props = {
  children: React.ReactNode;
};

const FormGoogleButton = ({ children }: Props) => {
  return (
    <Button
      type='button'
      onClick={() => signIn('google', { callbackUrl: '/setup' })}
      intent='ghost'
      className='w-full space-x-2'
    >
      <GoogleIcon className='h-4 w-4' /> <span>{children}</span>
    </Button>
  );
};

export default FormGoogleButton;
