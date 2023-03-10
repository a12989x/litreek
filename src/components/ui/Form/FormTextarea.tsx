import { FormControl } from '@radix-ui/react-form';

import { Textarea } from '~/components/ui';
import { type Props as TextareaProps } from '~/components/ui/Textarea';

interface Props extends TextareaProps {
  placeholder: string;
}
const FormTextarea = ({ placeholder, ...props }: Props) => {
  return (
    <FormControl asChild>
      <Textarea
        className='max-h-28 min-h-[60px] w-full'
        placeholder={placeholder}
        {...props}
      />
    </FormControl>
  );
};

export default FormTextarea;
