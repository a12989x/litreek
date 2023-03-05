import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

import ButtonOrLink, { type Props as ButtonOrLinkProps } from './ButtonOrLink';

const buttonStyles = tv({
  base: 'flex w-fit items-center justify-center border font-medium',
  variants: {
    intent: {
      cta: cn(
        'hover:animate-cta-bg rounded-lg border-0 bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500 bg-[length:165%] text-white transition-colors'
      ),
      primary: cn(''),
    },
    size: {
      smal: 'px-3 h-7 text-xs',
      medium: 'h-8 px-4 text-sm',
      large: 'px-6 h-12 text-md',
    },
  },
  defaultVariants: {
    primary: 'primary',
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
