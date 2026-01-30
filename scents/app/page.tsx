'use client'
import AnimatedSection from "@/components/AnimatedSection";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import Product from "@/components/home/Product";
import Promotion from "@/components/home/Promotion";
import Services from "@/components/home/Services";


export default function Home() {
  return (
     <div >
        <AnimatedSection>
          <Hero/>

        </AnimatedSection>
        <AnimatedSection>
          <Services/>

        </AnimatedSection>
        
        <AnimatedSection>
          <Product/>

        </AnimatedSection>
       
         <AnimatedSection>
          <Promotion/>

        </AnimatedSection>
        <AnimatedSection>
          <Newsletter/>

        </AnimatedSection>
        <AnimatedSection>
          <Gallery/>

        </AnimatedSection>
        
        
        
        
        

      </div>
  );
}
