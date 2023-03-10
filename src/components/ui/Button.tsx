import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

import ButtonOrLink, { type Props as ButtonOrLinkProps } from './ButtonOrLink';

const buttonStyles = tv({
  base: cn(
    'flex w-fit items-center justify-center font-bold',
    'outline-indigo-800 focus:outline'
  ),
  variants: {
    intent: {
      cta: cn(
        'hover:animate-cta-bg rounded-lg bg-gradient-to-r from-pink-900 via-indigo-900 to-purple-900 bg-[length:165%] text-gray-100 transition-colors'
      ),
      primary: cn(
        'bg-gray-1200 rounded-lg text-gray-100 transition-colors',
        'hover:bg-gray-1200/80'
      ),
      ghost: cn(
        'text-gray-1200 rounded-lg border border-gray-700 bg-gray-100 transition-colors',
        'hover:border-gray-800 hover:bg-gray-200'
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

export interface Props extends ButtonOrLinkProps, ButtonVariants { }

const Button = forwardRef<HTMLButtonElement, Props>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ intent, size, className, ref, ...props }, forwardRef) => {
    return (
      <ButtonOrLink
        className={buttonStyles({ intent, size, class: className })}
        ref={forwardRef}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
