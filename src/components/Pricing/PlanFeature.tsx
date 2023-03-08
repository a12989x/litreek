import { IconCircleCheckFilled } from '@tabler/icons-react';

type Props = {
  children: React.ReactNode;
};

const PlanFeature = ({ children }: Props) => {
  return (
    <li className='flex items-center gap-x-2'>
      <IconCircleCheckFilled size={20} /> <span>{children}</span>
    </li>
  );
};

export default PlanFeature;
