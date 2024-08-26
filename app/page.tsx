"use client"

import { Approach } from "@/components/approach";

import { Experience } from "@/components/experience";
import { Technologies } from "@/components/tehnologies";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
//import { RecentProjects } from "@/components/recent-projects";
import { useNav } from "@/data";

const MainPage = () => {

  const navItems = useNav()

  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />

       {/* <RecentProjects /> zakomentova cast s prikladmi projektov*/}
        
        <Experience />
        <Technologies/>
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
