import { About } from "@/components/home/About";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { PremiumQuality } from "@/components/home/PremiumQuality";
import { Stats } from "@/components/home/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <About />
      <Stats />
      <FeaturedProducts />
      <PremiumQuality />
    </>
  );
}
