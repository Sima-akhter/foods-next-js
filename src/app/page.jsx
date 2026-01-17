import BestFoods from "@/components/BestFoods";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

import Image from "next/image";

export default function Home() {
  return (
   <div className="">
    
    <Hero></Hero>
    <BestFoods></BestFoods>
    <Features></Features>
    <Services></Services>
    <Stats></Stats>
    <Reviews></Reviews>
    <Newsletter></Newsletter>

   </div>
  );
}
