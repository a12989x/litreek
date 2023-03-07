import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

import ButtonOrLink, { type Props as ButtonOrLinkProps } from './ButtonOrLink';

const linkStyles = tv({
  base: cn('rounded-sm outline-indigo-800 focus:outline'),
  variants: {
    intent: {
      nav: cn(
        'text-underline inline-flex h-8 items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors',
        'hover:bg-indigo-400'
      ),
      footer: cn(
        'font-medium text-gray-900',
        'hover:text-gray-1000 hover:underline'
      ),
    },
  },
  defaultVariants: {},
});

type LinkVariants = VariantProps<typeof linkStyles>;

interface Props extends ButtonOrLinkProps, LinkVariants {
  href: string;
  isExternal?: boolean;
}

const Link = ({ intent, className, href, isExternal, ...props }: Props) => {
  if (isExternal)
    return (
      <ButtonOrLink
        target='_blank'
        rel='noopener noreferrer'
        className={linkStyles({ intent, className })}
        href={href}
        {...props}
      />
    );

  return (
    <ButtonOrLink
      className={linkStyles({ intent, className })}
      href={href}
      {...props}
    />
  );
};

export default Link;
