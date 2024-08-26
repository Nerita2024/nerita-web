"use client"; // Mark this as a Client Component

import { useRouter } from 'next/navigation';
import Image from "next/image";

import { Button } from "@/components/ui/moving-borders";
import { useWorkExperience } from "@/data";

import { useTranslation } from 'react-i18next';

interface ExperienceItem {
  id: number;
  title: string;
  desc: string;
  thumbnail: string;
}

export const Experience = () => {
  const router = useRouter();
  const workExperience = useWorkExperience() 

  const { t } = useTranslation();

  const handleButtonClick = (experience: ExperienceItem) => {
    const query = new URLSearchParams({
      id: experience.id.toString(),
      title: experience.title,
      desc: experience.desc,
      thumbnail: experience.thumbnail
    }).toString();

    router.push(`/experience-detail?${query}`);
  };

  return (
    <section id="experience" className="py-20">
      <h1 className="heading">
        {t("workExperience.title-1")} <span className="text-purple">{t("workExperience.title-2")}</span>
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((experience) => (
          <Button
            key={experience.id}
            borderRadius="1.75rem"
            className="flex-1 border-neutral-200 text-white dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000 + 10000)}
            onClick={() => handleButtonClick(experience)}
          >
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <Image
                width={95}
                height={87}
                src={experience.thumbnail}
                alt={experience.title}
                className="w-16 md:w-20 lg:w-32"
              />

              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">
                  {experience.title}
                </h1>
                <p className="mt-3 text-start font-semibold text-white-100">
                  {experience.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};
