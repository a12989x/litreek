const Twitch = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.57 4.71h1.72v5.15h-1.72zm4.72 0H18v5.15h-1.71zM6 0 1.71 4.29V19.7h5.15V24l4.28-4.29h3.43L22.3 12V0zm14.57 11.14-3.43 3.43h-3.43l-3 3v-3H6.86V1.71h13.71Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default Twitch;
