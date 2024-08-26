"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { MagicButton } from "@/components/ui/magic-button";

import { FocusCards } from "./ui/focus-cards";

import { useTranslation } from 'react-i18next';

export const Approach = () => {

  const { t } = useTranslation();

  const cards = [
    {
      title: t("services.software-title"),
      src: "/approach_1.png",
      description: t("services.software-description")
    },
    {
      title: t("services.web-title"),
      src: "/approach_2.png",
      description: t("services.web-title")
    },
    {
      title: t("services.tech-title"),
      src: "/approach_3.jpg",
      description: t("services.tech-title")
    },
    
  ]

  return (
    <section className="w-full py-20">
      <h1 className="heading">
        {t("services.title-1")} <span className="text-purple">{t("services.title-2")}</span>
      </h1>

      {/* <div className="my-20 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Card
          title="Software Development"
          description="Creating reliable and software-based applications and solutions to meet your goals"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          title="Website Development"
          description="Focusing on creating a cutting-edge website that brings modernism to your business goals"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Technical Support"
          description="Our applications and solutions are hosted on cloud infrastructure using innovative solutions"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div> */}
      <div className="my-20 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <FocusCards cards={cards} />
      </div>
    </section>
  );
};


type CardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const Card = ({ title, description, children }: CardProps) => {
  return (
    <div className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]">
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 h-full w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-[50%] -translate-y-[50%] items-center justify-center text-center transition duration-200">
          {/* Removed icon */}
        </div>

        <h2 className="relative z-10 mt-4 text-3xl font-bold text-black opacity-100 transition duration-200 dark:text-white">
          {title}
        </h2>

        <p
          className="relative z-10 mt-4 text-sm font-bold text-black opacity-100 transition duration-200"
          style={{
            color: "#e4ecff",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};



export const Icon = ({ className, ...props }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
