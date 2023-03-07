import { type ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

type TextareaProps = ComponentProps<'textarea'>;

const textareaStyles = tv({
  base: '',
  variants: {},
  defaultVariants: {},
});

type TextareaVariants = VariantProps<typeof textareaStyles>;

interface Props extends TextareaProps, TextareaVariants { }

const Textarea = ({ ...props }: Props) => {
  return <textarea {...props} />;
};

export default Textarea;
