import FeatureDescription from './FeatureDescription';
import FeatureImage from './FeatureImage';
import FeatureName from './FeatureName';

type Props = {
  children: React.ReactNode;
};

const Feature = ({ children }: Props) => {
  return <li className='flex flex-col items-center'>{children}</li>;
};

Feature.Image = FeatureImage;
Feature.Name = FeatureName;
Feature.Description = FeatureDescription;

export default Feature;
