"use client"

import dynamic from "next/dynamic";

// import { Approach } from "@/components/approach";

// import { Experience } from "@/components/experience";
// import { Technologies } from "@/components/tehnologies";
// import { Footer } from "@/components/footer";
// import { Grid } from "@/components/grid";
// import { Hero } from "@/components/hero";
// import { FloatingNav } from "@/components/ui/floating-nav";

const FloatingNav = dynamic(() => import('@/components/ui/floating-nav'), { ssr: false });
const Hero = dynamic(() => import('@/components/hero'), { ssr: false });
const Approach = dynamic(() => import('@/components/approach'), { ssr: false });
const Grid = dynamic(() => import('@/components/grid'), { ssr: false });
const Experience = dynamic(() => import('@/components/experience'), { ssr: false });
const Technologies = dynamic(() => import('@/components/tehnologies'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

const MainPage = () => {

  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav />

      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />

       {/* <RecentProjects /> zakomentova cast s prikladmi projektov*/}
        
        <Experience />
        <Technologies />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
