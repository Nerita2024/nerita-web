import Image from "next/image";
import Link from "next/link";

import { socialMedia } from "@/data";
import { useTranslation } from 'react-i18next';
import { Clients } from "@/components/clients";
import { Suspense } from "react";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto">
        <div className="absolute -bottom-72 left-0 min-h-96 w-full">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            className="h-full w-full opacity-50"
            width={1260}
            height={863}
          />
        </div>

        <div className="flex flex-col items-center">
          <Clients />

          {/* Uncomment the link if needed */}
          {/* 
          <Link
            href={`mailto:${links.ownerEmail}`}
            target="_blank"
            rel="noreferrer noopener"
            className="md:mt-10"
          >
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link> 
          */}
        </div>

        <div id="footer" className="relative z-[999] mt-16 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12 px-4 md:px-8">
          <p className="text-sm font-light md:text-base md:font-normal text-center md:text-left">
            {t("footer.address")} Panská 9, 811 01 Bratislava, Slovakia
            <br />
            {t("footer.phone")} +421 911 065 505
            <br />
            {t("footer.email")} nerita@nerita.eu
            <br />
            <br />
            <span>Copyright &copy; {new Date().getFullYear()} {t("footer.rights")}</span>
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            {socialMedia.map((profile) => (
              <Link
                key={profile.name}
                href={profile.link}
                target="_blank"
                rel="noreferrer noopener"
                className="saturate-180 flex items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter p-2"
                title={profile.name}
              >
                <Image
                  src={profile.img}
                  alt={`profile-${profile.name}`}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="relative z-[999] mt-16 flex flex-col items-center justify-center md:flex-row"> 
          {/* Additional content if needed */}
        </div>
      </footer>
    </Suspense>
  );
};
