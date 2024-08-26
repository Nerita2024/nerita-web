import { useState, useEffect } from 'react';
import Image from "next/image";

import { technologies } from "@/data";
import { useTranslation } from 'react-i18next';

export const Technologies = () => {
  const { t, ready } = useTranslation();
  
  const [title, setTitle] = useState<string>("");
  const [paragraph, setParagraph] = useState<string>("");

  useEffect(() => {
    if (ready) {
      setTitle(t("technologies.title"));
      setParagraph(t("technologies.paragraph"));
    }
  }, [t, ready]);

  return (
    <section id="technologies" className="py-20 w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
      
      <h1 className="heading">
        {title}<span className="text-purple"></span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex h-[15vh] flex-col items-center justify-center overflow-hidden rounded-md antialiased">
          <p>{paragraph}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-16 max-lg:mt-15 md:gap-32">
          {technologies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
              <Image
                height={100}
                width={100}
                src={img}
                alt={`${name}'s logo`}
                className="w-13 md:w-13"
              />

              {/* <Image
                height={28}
                width={131}
                src={nameImg}
                alt={name}
                className="w-20 md:w-24"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
