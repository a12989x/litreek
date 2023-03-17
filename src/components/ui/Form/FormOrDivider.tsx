import { forwardRef } from 'react';

const FormOrDivider = forwardRef<HTMLInputElement>(({}, ref) => {
  return (
    <div
      ref={ref}
      className='my-8 grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4'
    >
      <div className='h-px bg-gray-600' />
      <span>Or</span>
      <div className='h-px bg-gray-600' />
    </div>
  );
});

FormOrDivider.displayName = 'FormOrDivider';

export default FormOrDivider;
