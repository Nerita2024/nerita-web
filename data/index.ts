"use client";

import IconUser  from '../public/user.png';
import IconExperience  from '../public/experience.png';
import IconTestimonials  from '../public/testimonials.png';
import IconContact  from '../public/contact.png';
import { useTranslation } from 'react-i18next';

export const useNav = () =>{
  const { t } = useTranslation();

  return [
    { name: t("nav.about"), link: "#about", icon: IconUser },
    { name: t("nav.experience"), link: "#experience", icon: IconExperience },
    { name: t("nav.testimonials"), link: "#testimonials", icon: IconTestimonials },
    { name: t("nav.contact"), link: "#footer", icon: IconContact },
  ]
}


export const useNavItems = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      title: t("gridItems.1Title"),
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: t("gridItems.2Title"),
      description: "",
      className: "lg:col-span-2 md:col-span-6 md:row-span-4",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
  
    {
      id: 4,
      title: t("gridItems.3Title"),
      description: "",
      className: "lg:col-span-3 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      
    },
  
    {
      id: 6,
      title: t("gridItems.4Title"),
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ] as const;
};

export const useWorkExperience = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      title: t("workExperience.appolon-title"),
      desc: t("workExperience.appolon-description"),
      className: "md:col-span-2",
      thumbnail: "/appolon_logo_no_text.svg",
    },
    {
      id: 2,
      title: t("workExperience.innovation-title"),
      desc: t("workExperience.innovation-description"),
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: t("workExperience.cloud-infrastrucutre-title"),
      desc: t("workExperience.cloud-infrastrucutre-title"),
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: t("workExperience.client-portal-title"),
      desc: t("workExperience.client-portal-description"),
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ]
}

// export const projects = [
//   {
//     id: 1,
//     title: "FigPro - Collaborative Design Tool",
//     des: "A collaborative design tool with real-time collaboration, vector editing, and a responsive UI.",
//     img: "/p1.svg",
//     iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
//     link: "https://clone-figmaa.netlify.app",
//     sourceCode: "https://github.com/sanidhyy/figma-clone",
//   },
//   {
//     id: 2,
//     title: "Yoom - Video Conferencing App",
//     des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
//     img: "/p2.svg",
//     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
//     link: "https://clone-yoom.netlify.app",
//     sourceCode: "https://github.com/sanidhyy/zoom-clone",
//   },
//   {
//     id: 3,
//     title: "AI Image SaaS - Canva Application",
//     des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
//     img: "/p3.svg",
//     iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
//     link: "https://ai-imaginify.netlify.app",
//     sourceCode: "https://github.com/sanidhyy/imaginify",
//   },
//   {
//     id: 4,
//     title: "Animated Apple Iphone 3D Website",
//     des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
//     img: "/p4.svg",
//     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
//     link: "https://app-iphone.netlify.app",
//     sourceCode: "https://github.com/sanidhyy/apple-clone",
//   },
// ] as const;

export const useTestimonials = () =>{
  const { t } = useTranslation();

  return [
    {
      quote: t("testimonials.quote"),
      name: t("testimonials.name"),
      title: t("testimonials.subtitle-name"),
    },
    {
      quote: t("testimonials.quote"),
      name: t("testimonials.name"),
      title: t("testimonials.subtitle-name"),
    },
    {
      quote: t("testimonials.quote"),
      name: t("testimonials.name"),
      title: t("testimonials.subtitle-name"),
    },
    {
      quote: t("testimonials.quote"),
      name: t("testimonials.name"),
      title: t("testimonials.subtitle-name"),
    },
    {
      quote: t("testimonials.quote"),
      name: t("testimonials.name"),
      title: t("testimonials.subtitle-name"),
    },
    
  ]
}


export const technologies = [
  {
    id: 1,
    name: "Docker",
    img: "/docker-mark-blue.svg",
    nameImg: "/docker-mark-blue.svg",
  },
  {
    id: 2,
    name: "react",
    img: "/react-js-icon.svg",
    nameImg: "/react-js-icon.svg",
  },
  {
    id: 3,
    name: "react-native",
    img: "/react-native-1.svg",
    nameImg: "/react-native-1.svg",
  },
  {
    id: 4,
    name: "postgree",
    img: "/postgresql-logo.svg",
    nameImg: "/postgresql-logo.svg",
  },
  {
    id: 5,
    name: "elasticsearch",
    img: "/es-logo.svg",
    nameImg: "/es-logo.svg",
  },
  {
    id: 6,
    name: "digital-ocean",
    img: "/digital-ocean-logo.svg",
    nameImg: "/digital-ocean-logo.svg",
  },
  {
    id: 7,
    name: "laravel",
    img: "/laravel-logo.svg",
    nameImg: "/laravel-logo.svg",
  },
  {
    id: 8,
    name: "aws",
    img: "/aws-logo(2).png",
    nameImg: "/aws-logo.svg",
  },
  {
    id: 9,
    name: "tailwind",
    img: "/tailwind-logo.svg",
    nameImg: "/tailwind-logo.svg",
  },
  {
    id: 10,
    name: "nodejs",
    img: "/nodejs-logo.svg",
    nameImg: "/nodejs-logo.svg",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "IBM Cloud",
    img: "/ibm_cloud_logo.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Microsoft Azure",
    img: "/mazure-logo.png",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Google Cloud",
    img: "/google-cloud.png",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "asws",
    img: "/amazon_ws_logo.png",
    nameImg: "/aws-logo-services.svg",
  },
  
] as const;


export const socialMedia = [
  {
    name: "E-mail",
    img: "/mail.png",
    link: "mailto:nerita@nerita.eu",
  },
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Nerita2024",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Python", ".Net", "MySQL"],
} as const;
