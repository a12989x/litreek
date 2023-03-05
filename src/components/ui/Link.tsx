import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

import ButtonOrLink, { type Props as ButtonOrLinkProps } from './ButtonOrLink';

const linkStyles = tv({
  base: cn(),
  variants: {
    intent: {
      nav: cn(
        'text-underline rounded-lg hover:bg-purple-200 inline-flex h-8 items-center justify-center px-3 text-sm font-medium transition-colors'
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
