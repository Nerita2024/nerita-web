"use client"

import { Suspense } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const ExperienceDetailContent: NextPage = () => {
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
          width={500}  // Specify the width you want
          height={300} // Specify the height you want
          layout="responsive" // Use responsive layout or another layout depending on your needs
        />
      )}
    </div>
  );
};

const ExperienceDetail: NextPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ExperienceDetailContent />
  </Suspense>
);

export default ExperienceDetail;
