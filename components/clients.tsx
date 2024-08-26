import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { companies, useTestimonials } from "@/data";
import { useTranslation } from 'react-i18next';
import { Suspense } from "react";

export const Clients = () => {
  const { t } = useTranslation();
  const testimonials = useTestimonials();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section id="testimonials" className="py-20">
        <h1 className="heading">
          {t("testimonials.title-1")} <span className="text-purple">{t("testimonials.title-2")}</span>
        </h1>

        <div className="flex flex-col items-center max-lg:mt-10">
          <div className="relative flex h-[50vh] flex-col items-center justify-center overflow-hidden rounded-md antialiased md:h-[30rem]">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>

          <h1 className="heading py-20">
            {t("partner.title-1")} <span className="text-purple">{t("partner.title-2")}</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-5 max-lg:mt-7 md:gap-16">
            {companies.map(({ id, img, name, nameImg }) => {
              // Define default dimensions
              let height = 220;
              let width = 220;

              // Modify dimensions based on name
              if (name === "asws") {
                height = 120; // Example smaller height
                width = 120;  // Example smaller width
              }

              return (
                <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
                  <Image
                    height={height}
                    width={width}
                    src={img}
                    alt={`${name}'s logo`}
                    className="w-15 md:w-15"
                  />

                  {/* Uncomment if needed */}
                  {/* 
                  <Image
                    height={28}
                    width={131}
                    src={nameImg}
                    alt={name}
                    className="w-20 md:w-24"
                  /> 
                  */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Suspense>
  );
};
