import PlanBilled from './PlanBilled';
import PlanDescription from './PlanDescription';
import PlanFeature from './PlanFeature';
import PlanFeatures from './PlanFeatures';
import PlanHeader from './PlanHeader';
import PlanName from './PlanName';
import PlanPrice from './PlanPrice';
import PlanPriceContainer from './PlanPriceContainer';

type Props = {
  children: React.ReactNode;
};

const Plan = ({ children }: Props) => {
  return (
    <li className='space-y-6 rounded-lg border border-gray-600 p-6'>
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

export default Plan;
