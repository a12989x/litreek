import Image from 'next/image';

type Props = {
  src: string;
};

const FeatureImage = ({ src }: Props) => {
  return (
    <Image
      className='rounded-lg bg-gray-200'
      alt={src.slice(5, -5)}
      height={200}
      width={200}
      src={src}
    />
  );
};

export default FeatureImage;
