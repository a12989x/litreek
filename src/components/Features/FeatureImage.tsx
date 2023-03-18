import Image from 'next/image';

type Props = {
  src: string;
};

const FeatureImage = ({ src }: Props) => {
  return (
    <Image
      alt={src.slice(5, -4)}
      className='rounded-lg bg-gray-200'
      height={200}
      src={src}
      width={200}
    />
  );
};

export default FeatureImage;
