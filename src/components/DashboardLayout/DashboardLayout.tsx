import Tabs from './Tabs/Tabs';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className='relative mx-auto grid w-full max-w-screen-xl grid-cols-3 px-8'>
      <div className='col-span-2'>
        <Tabs />

        <div className='mt-6'>{children}</div>
      </div>

      <div>Preview</div>
    </div>
  );
};

export default DashboardLayout;
