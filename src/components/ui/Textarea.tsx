import { type ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

import { inputStyles } from './Input';

type TextareaProps = ComponentProps<'textarea'>;

const textareaStyles = tv({
  extend: inputStyles,
  base: cn('min-h-20 h-auto p-4'),
  variants: {},
  defaultVariants: {},
});

type TextareaVariants = VariantProps<typeof textareaStyles>;

export interface Props extends TextareaProps, TextareaVariants {}

const Textarea = ({ className, ...props }: Props) => {
  return (
    <textarea className={textareaStyles({ class: className })} {...props} />
  );
};

export default Textarea;
