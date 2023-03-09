import { cn } from '~/utils';

import PlanBilled from './PlanBilled';
import PlanButton from './PlanButton';
import PlanDescription from './PlanDescription';
import PlanFeature from './PlanFeature';
import PlanFeatures from './PlanFeatures';
import PlanHeader from './PlanHeader';
import PlanName from './PlanName';
import PlanPrice from './PlanPrice';
import PlanPriceContainer from './PlanPriceContainer';

type Props = {
  isMain: boolean;
  children: React.ReactNode;
};

const Plan = ({ isMain, children }: Props) => {
  return (
    <li
      className={cn(
        'w-[400px] space-y-6 rounded-lg border border-gray-600 p-6',
        isMain ? 'ring ring-indigo-900' : ''
      )}
    >
      {children}
    </li>
  );
};

Plan.Header = PlanHeader;
Plan.Name = PlanName;
Plan.Description = PlanDescription;
Plan.PriceContainer = PlanPriceContainer;
Plan.Price = PlanPrice;
Plan.Billed = PlanBilled;
Plan.Features = PlanFeatures;
Plan.Feature = PlanFeature;
Plan.Button = PlanButton;

export default Plan;
