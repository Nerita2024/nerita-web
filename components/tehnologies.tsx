"use client";

import Image from "next/image";
import { technologiesList } from "@/data";
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { AnimatedTooltip } from "../components/ui/AnimatedTooltip"; // Import the AnimatedTooltip component

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section id="technologies" className="py-20 w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <h1 className="heading">
          {t("technologies.title", { defaultValue: "Technologies" })}<span className="text-purple"></span>
        </h1>

        <div className="flex flex-col items-center max-lg:mt-10">
          <div className="relative flex h-[15vh] flex-col items-center justify-center overflow-hidden rounded-md antialiased">
            <p>{t("technologies.paragraph", { defaultValue: "All projects are unique. That's why we start by finding the solution and then we select optimal-fit technology." })}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-16 max-lg:mt-15 md:gap-32">
            {/* Use the AnimatedTooltip component */}
            <AnimatedTooltip items={technologiesList.map(({ id, name, img, nameImg, designation }) => ({
              id,
              name,
              designation: designation || "Technology", // Add a default designation if needed
              image: img,
            }))} />
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default Technologies;
