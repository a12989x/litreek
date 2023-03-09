import { FormSubmit } from '@radix-ui/react-form';
import { Button } from '~/components/ui';
import { type Props as ButtonProps } from '~/components/ui/Button';

interface Props extends ButtonProps {
  children: React.ReactNode;
}

const FormButton = ({ children }: Props) => {
  return (
    <FormSubmit asChild>
      <Button className='w-full'>{children}</Button>
    </FormSubmit>
  );
};

export default FormButton;
