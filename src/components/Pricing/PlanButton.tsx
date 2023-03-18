import { cn } from '~/utils';

import { buttonStyles } from '~/components/ui/Button';
import { Link } from '~/components/ui/Link';

type Props = {
  isMain: boolean;
  children: React.ReactNode;
};

const PlanButton = ({ isMain, children }: Props) => {
  return (
    <Link
      className={cn(
        buttonStyles({ intent: isMain ? 'cta' : 'primary' }),
        'w-full'
      )}
      href='/register'
    >
      {children}
    </Link>
  );
};

export default PlanButton;
