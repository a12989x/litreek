import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

import { inputStyles } from './Input';

export const textareaStyles = tv({
  extend: inputStyles,
  base: cn('min-h-20 h-auto p-4'),
  variants: {},
  defaultVariants: {},
});

type TextareaProps = React.ComponentPropsWithoutRef<'textarea'>;
type TextareaVariants = VariantProps<typeof textareaStyles>;

export interface Props extends TextareaProps, TextareaVariants {}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={textareaStyles({ class: className })}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
