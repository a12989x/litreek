import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

import ButtonOrLink, { type Props as ButtonOrLinkProps } from './ButtonOrLink';

const buttonStyles = tv({
  base: 'flex w-fit items-center justify-center font-bold',
  variants: {
    intent: {
      cta: cn(
        'hover:animate-cta-bg rounded-lg bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500 bg-[length:165%] text-white transition-colors'
      ),
      primary: cn(
        'rounded-lg bg-black text-white transition-colors hover:bg-gray-800'
      ),
    },
    size: {
      small: 'px-3 h-8 text-sm',
      medium: 'h-10 px-4 text-sm',
      large: 'px-6 h-12 text-md',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

type ButtonVariants = VariantProps<typeof buttonStyles>;

interface Props extends ButtonOrLinkProps, ButtonVariants { }

const Button = ({ intent, size, className, ...props }: Props) => {
  return (
    <ButtonOrLink
      className={buttonStyles({ intent, size, class: className })}
      {...props}
    />
  );
};

export default Button;
