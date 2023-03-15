import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

import ButtonOrLink, { type Props as ButtonOrLinkProps } from './ButtonOrLink';

const linkStyles = tv({
  base: cn('rounded-sm outline-indigo-800 focus:outline'),
  variants: {
    intent: {
      nav: cn(
        'inline-flex h-8 items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors',
        'hover:bg-indigo-400',
        'active:bg-indigo-500'
      ),
      footer: cn(
        'font-medium text-gray-900',
        'hover:text-gray-1000 hover:underline'
      ),
      underline: cn('underline transition-colors', 'hover:text-indigo-900'),
    },
  },
  defaultVariants: {},
});

type LinkVariants = VariantProps<typeof linkStyles>;

interface Props extends ButtonOrLinkProps, LinkVariants {
  isExternal?: boolean;
}

const Link = forwardRef<HTMLAnchorElement & HTMLButtonElement, Props>(
  ({ intent, className, isExternal, ...props }, forwardRef) => {
    if (isExternal)
      return (
        <ButtonOrLink
          target='_blank'
          rel='noopener noreferrer'
          className={linkStyles({ intent, className })}
          ref={forwardRef}
          {...props}
        />
      );

    return (
      <ButtonOrLink
        className={linkStyles({ intent, className })}
        ref={forwardRef}
        {...props}
      />
    );
  }
);

Link.displayName = 'Link';

export default Link;
