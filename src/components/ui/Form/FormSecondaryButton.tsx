import { FormSubmit } from '@radix-ui/react-form';
import { Button } from '~/components/ui';
import { type Props as ButtonProps } from '~/components/ui/Button';

interface Props extends ButtonProps {
  children: React.ReactNode;
}

const FormSecondaryButton = ({ children, ...props }: Props) => {
  return (
    <FormSubmit asChild>
      <Button intent='ghost' type='button' className='w-full' {...props}>
        {children}
      </Button>
    </FormSubmit>
  );
};

export default FormSecondaryButton;
