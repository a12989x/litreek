import { signIn } from 'next-auth/react';

import { GitHubIcon } from '~/components/icons';
import { Button } from '~/components/ui/Button';

type Props = {
  children: React.ReactNode;
};

const FormGitHubButton = ({ children }: Props) => {
  return (
    <Button
      type='button'
      onClick={() => signIn('github', { callbackUrl: '/' })}
      intent='ghost'
      className='w-full space-x-2'
    >
      <GitHubIcon className='h-4 w-4' /> <span>{children}</span>
    </Button>
  );
};

export default FormGitHubButton;
