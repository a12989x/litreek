import { type ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

type InputProps = ComponentProps<'input'>;

export const inputStyles = tv({
  base: cn(
    'h-10 rounded-lg border border-gray-700 px-4 transition-colors duration-200',
    'hover:border-gray-800',
    'outline-indigo-800 focus:outline'
  ),
  variants: {},
  defaultVariants: {},
});

type InputVariants = VariantProps<typeof inputStyles>;

interface Props extends InputProps, InputVariants { }

const Input = ({ className, ...props }: Props) => {
  return <input className={inputStyles({ class: className })} {...props} />;
};

export default Input;
