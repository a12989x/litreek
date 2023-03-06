import { type ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

type InputProps = ComponentProps<'input'>;

const inputStyles = tv({
  base: cn('border-grey-700 h-10 rounded-lg border px-4'),
  variants: {},
  defaultVariants: {},
});

type InputVariants = VariantProps<typeof inputStyles>;

interface Props extends InputProps, InputVariants { }

const Input = ({ className, ...props }: Props) => {
  return <input className={inputStyles({ class: className })} {...props} />;
};

export default Input;
