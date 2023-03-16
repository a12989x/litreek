import { forwardRef } from 'react';
import NextLink from 'next/link';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

export const linkStyles = tv({
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

type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;
type LinkVariants = VariantProps<typeof linkStyles>;

export interface Props extends LinkProps, LinkVariants {
  isExternal?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ intent, className, isExternal, ...props }, forwardRef) => {
    if (isExternal)
      return (
        <NextLink
          target='_blank'
          rel='noopener noreferrer'
          className={linkStyles({ intent, className })}
          ref={forwardRef}
          {...props}
        />
      );

    return (
      <NextLink
        className={linkStyles({ intent, className })}
        ref={forwardRef}
        {...props}
      />
    );
  }
);

Link.displayName = 'Link';
