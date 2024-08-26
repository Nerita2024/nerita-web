"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useNavItems } from "@/data";

export const Grid = () => {

  const navItems = useNavItems()

  return (
    <section id="about">
      <BentoGrid>
        {navItems.map((gridItem) => (
          <BentoGridItem key={gridItem.id} {...gridItem} />
        ))}
      </BentoGrid>
    </section>
  );
};
