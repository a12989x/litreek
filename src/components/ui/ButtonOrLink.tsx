import { forwardRef, type ComponentProps } from 'react';
import Link from 'next/link';

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

export type Props = ButtonOrLinkProps;

export const ButtonOrLink = forwardRef<HTMLAnchorElement, Props>(
  ({ href, ...props }, ref) => {
    const isLink = typeof href !== 'undefined';
    const ButtonOrLink = isLink ? 'a' : 'button';

    const content = <ButtonOrLink {...props} />;

    if (isLink)
      return (
        <Link legacyBehavior ref={ref} href={href}>
          {content}
        </Link>
      );

    return content;
  }
);

ButtonOrLink.displayName = 'ButtonOrLink';

export default ButtonOrLink;
