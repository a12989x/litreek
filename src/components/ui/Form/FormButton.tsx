import { Button } from '~/components/ui';

type Props = {
  children: React.ReactNode;
};

const FormButton = ({ children }: Props) => {
  return (
    <Button type='submit' className='w-full'>
      {children}
    </Button>
  );
};

export default FormButton;
