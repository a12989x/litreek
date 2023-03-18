const Google = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.68 8.18c0-.54-.04-1.09-.13-1.62H8v3.08h4.32a3.7 3.7 0 0 1-1.6 2.43v2h2.58a7.81 7.81 0 0 0 2.38-5.89Z'
        fill='#4285F4'
      />
      <path
        d='M8 16a7.6 7.6 0 0 0 5.3-1.93l-2.58-2c-.71.49-1.64.76-2.72.76a4.79 4.79 0 0 1-4.49-3.3H.85v2.06A8 8 0 0 0 8 16Z'
        fill='#34A853'
      />
      <path
        d='M3.5 9.53a4.8 4.8 0 0 1 0-3.06V4.41H.86a8 8 0 0 0 0 7.18l2.66-2.06Z'
        fill='#FBBC04'
      />
      <path
        d='M8 3.17a4.35 4.35 0 0 1 3.07 1.2l2.28-2.29A8 8 0 0 0 .85 4.41l2.66 2.06c.63-1.9 2.4-3.3 4.49-3.3Z'
        fill='#EA4335'
      />
    </svg>
  );
};

export default Google;
