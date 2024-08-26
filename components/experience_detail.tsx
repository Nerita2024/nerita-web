import { useSearchParams } from 'next/navigation';
import { NextPage } from 'next';

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
      {thumbnail && <img src={thumbnail} alt={title} />}
    </div>
  );
};

export default ExperienceDetail;
