import { Button } from '~/components/ui';

type Props = {
  isMain: boolean;
  children: React.ReactNode;
};

const PlanButton = ({ isMain, children }: Props) => {
  return (
    <Button
      href='/register'
      intent={isMain ? 'cta' : 'primary'}
      className='w-full'
    >
      {children}
    </Button>
  );
};

export default PlanButton;
