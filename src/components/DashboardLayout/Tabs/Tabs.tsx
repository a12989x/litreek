import TabLink from './TabLink';

const Tabs = () => {
  return (
    <nav className='border-b border-b-gray-600'>
      <ul className='flex space-x-6 pb-2'>
        <TabLink href='/dashboard/links'>Link</TabLink>
        <TabLink href='/dashboard/design'>Design</TabLink>
        <TabLink href='/dashboard/stats'>Stats</TabLink>
        <TabLink href='/dashboard/settings'>Settings</TabLink>
      </ul>
    </nav>
  );
};

export default Tabs;
