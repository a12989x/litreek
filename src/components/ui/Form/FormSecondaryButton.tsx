import { FormSubmit } from '@radix-ui/react-form';

import { Button } from '~/components/ui';
import { type Props as ButtonProps } from '~/components/ui/Button';

interface Props extends ButtonProps {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FormSecondaryButton = ({ children, ref, ...props }: Props) => {
  return (
    <FormSubmit asChild>
      <Button intent='ghost' className='w-full' {...props}>
        {children}
      </Button>
    </FormSubmit>
  );
};

export default FormSecondaryButton;
