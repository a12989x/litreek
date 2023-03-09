import { Button } from '~/components/ui';

type Props = {
  isMain: boolean;
  children: React.ReactNode;
};

const PlanButton = ({ isMain, children }: Props) => {
  return (
    <Button intent={isMain ? 'cta' : 'primary'} className='w-full'>
      {children}
    </Button>
  );
};

export default PlanButton;
