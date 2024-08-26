import { useSearchParams } from 'next/navigation';
import { NextPage } from 'next';
import Image from 'next/image';

const ExperienceDetail: NextPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') ?? '';
  const title = searchParams.get('title') ?? '';
  const desc = searchParams.get('desc') ?? '';
  const thumbnail = searchParams.get('thumbnail') ?? '';

  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={title}
          layout="responsive" // This helps maintain the aspect ratio
          objectFit="cover" // This ensures the image covers the dimensions
        />
      )}
    </div>
  );
};

export default ExperienceDetail;
