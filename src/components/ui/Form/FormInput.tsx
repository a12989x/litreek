import { Input } from '~/components/ui';
import { type Props as InputProps } from '~/components/ui/Input';

interface Props extends InputProps {
  type: string;
  id: string;
  placeholder: string;
}

const FormInput = ({ type, id, placeholder, ...props }: Props) => {
  return (
    <Input
      type={type}
      id={id}
      placeholder={placeholder}
      className='w-full bg-gray-100'
      {...props}
    />
  );
};

export default FormInput;
