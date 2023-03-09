import { IconCircleCheckFilled, IconCircleXFilled } from '@tabler/icons-react';
import { cn } from '~/utils';

type Props = {
  checked: boolean;
  children: React.ReactNode;
};

const PlanFeature = ({ checked, children }: Props) => {
  return (
    <li
      className={cn(
        'flex items-center gap-x-2',
        checked ? '' : 'text-gray-1100'
      )}
    >
      {checked ? (
        <IconCircleCheckFilled size={20} />
      ) : (
        <IconCircleXFilled size={20} />
      )}{' '}
      <span>{children}</span>
    </li>
  );
};

export default PlanFeature;
