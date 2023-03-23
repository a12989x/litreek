import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

type ButtonOrLinkProps = ComponentPropsWithoutRef<'button'> &
  ComponentPropsWithoutRef<'a'>;

export type Props = ButtonOrLinkProps;

export const ButtonOrLink = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  Props
>(({ href, ...props }, ref) => {
  const isLink = typeof href !== 'undefined';
  const ButtonOrLink = isLink ? 'a' : 'button';

  const content = <ButtonOrLink {...props} />;

  if (isLink)
    return (
      <Link ref={ref} legacyBehavior href={href}>
        {content}
      </Link>
    );

  return content;
});

ButtonOrLink.displayName = 'ButtonOrLink';

export default ButtonOrLink;
