import { cn } from '~/utils';

type Props = {
  direction?: 'horizontal' | 'vertical';
  children: React.ReactNode;
};

const FormItems = ({ direction = 'vertical', children }: Props) => {
  return (
    <div
      className={cn(
        'flex gap-4',
        direction === 'vertical' ? 'flex-col' : '',
        direction === 'horizontal' ? 'flex-row' : ''
      )}
    >
      {children}
    </div>
  );
};

export default FormItems;
