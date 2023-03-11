import { Label } from '@radix-ui/react-label';
import { cn } from '~/utils';

import { type Props as InputProps } from '~/components/ui/Input';

import FormInput from './FormInput';

type Props = InputProps;

const FormUsername = ({ ...props }: Props) => {
  return (
    <div className='relative w-full'>
      <Label
        htmlFor='username'
        className='absolute left-0 flex h-10 items-center pl-4 font-medium'
      >
        treek.link/
      </Label>
      <FormInput
        type='text'
        id='username'
        placeholder='codingcodax'
        className={cn('w-full pl-[92.3167px]')}
        minLength={4}
        required
        {...props}
      />
    </div>
  );
};

export default FormUsername;
