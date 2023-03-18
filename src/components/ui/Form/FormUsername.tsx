import { forwardRef } from 'react';
import { Label } from '@radix-ui/react-label';
import { cn } from '~/utils';

import { type Props as InputProps } from '~/components/ui/Input';

import FormInput from './FormInput';

type Ref = React.ElementRef<'div'>;
type Props = InputProps;

const FormUsername = forwardRef<Ref, Props>(({ ...props }, ref) => {
  return (
    <div ref={ref} className='relative w-full'>
      <Label
        className='absolute left-0 flex h-10 items-center pl-4 font-medium'
        htmlFor='username'
      >
        treek.link/
      </Label>
      <FormInput
        className={cn('w-full pl-[92.3167px]')}
        id='username'
        type='text'
        {...props}
      />
    </div>
  );
});

FormUsername.displayName = 'FormUsername';

export default FormUsername;
