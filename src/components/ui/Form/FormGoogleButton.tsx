import { signIn } from 'next-auth/react';

import { GoogleIcon } from '~/components/icons';
import { Button } from '~/components/ui/Button';

type Props = {
  children: React.ReactNode;
};

const FormGoogleButton = ({ children }: Props) => {
  return (
    <Button
      className='w-full space-x-2'
      intent='ghost'
      type='button'
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
    >
      <GoogleIcon className='h-4 w-4' /> <span>{children}</span>
    </Button>
  );
};

export default FormGoogleButton;
