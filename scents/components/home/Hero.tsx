// import Image from "next/image";
// import React from "react";
// import { Button } from "../ui/button";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <section className="relative py-24 md:py-32 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-linear-to-br from-[#fbf9ff] via-white to-[#f3efff]" />
//         <div className="absolute top-24 left-20 w-md h-md bg-violet-300/20 rounded-md blur-[120px]" />
//         <div className="absolute bottom-20 right-20 w-[24rem] h-96 bg-purple-200/30 rounded-md blur-[120px]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-20 items-center">
//         {/* Text */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">
//           <span className="inline-block mb-6 px-6 py-2 rounded-md bg-purple-100 text-purple-700 text-xs font-medium tracking-widest shadow-sm">
//             Luxury Fragrances
//           </span>

//           <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-purple-900">
//             Discover Your
//             <br />
//             <span className="bg-linear-to-r from-purple-900 to-violet-600 bg-clip-text text-transparent">
//               Signature Scent
//             </span>
//           </h1>

//           <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
//             Explore perfumes that enhance your natural allure and express your
//             unique essence. Our shop features luxurious fragrances infused with
//             rich oud, warm amber, delicate florals and exotic spices. Designed
//             for those who desire depth, elegance and distinction in every drop
//           </p>

          
//         {/* Image */}
//         <div className="relative flex justify-center">
//           {/* Glow */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-104 h-104 rounded-md bg-linear-to-br from-purple-400/30 to-violet-400/20 blur-[120px]" />
//           </div>

//           <div className="relative w-72 md:w-md aspect-3/4">
//             <Image
//               src="/hero3.png"
//               alt="Luxury Perfume Bottle"
//               fill
//               priority
//               className="object-contain drop-shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "@/lib/sanity/client";
import Link from "next/link";
import { Button } from "../ui/button";

type HeroData = {
  badge?: string;
  title?: string;
  
  description?: string;
  image?: any;
};

const Hero = () => {
  const [hero, setHero] = useState<HeroData | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "hero"][0]{
          badge,
          title,
          description,
          image
        }`
      )
      .then(setHero);
  }, []);

  if (!hero) return null; 

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-[#fbf9ff] via-white to-[#f3efff]" />
        <div className="absolute top-24 left-20 w-md h-md bg-violet-300/20 rounded-md blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-[24rem] h-96 bg-purple-200/30 rounded-md blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {hero.badge && (
            <span className="inline-block mb-6 px-6 py-2 rounded-md bg-purple-100 text-purple-700 text-xs font-medium tracking-widest shadow-sm">
              {hero.badge}
            </span>
          )}

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] bg-linear-to-r from-purple-900 to-violet-600 bg-clip-text text-transparent">
            {hero.title}
            
            
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            {hero.description}
          </p>
          <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-4">
            <Button
              asChild
              className="rounded-md px-10 py-6 bg-linear-to-r from-purple-900 to-violet-700 hover:from-purple-800 hover:to-violet-600 text-white shadow-lg transition-all"
            >
              <Link href="/products">Shop Collection</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-md px-10 py-6 border-purple-300 text-purple-800 bg-white/60 backdrop-blur hover:bg-purple-50 transition-all"
            >
              <Link href="/products">Explore Scents</Link>
            </Button>
          </div>
          </div>

        {/* Image */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-104 h-104 rounded-md bg-linear-to-br from-purple-400/30 to-violet-400/20 blur-[120px]" />
          </div>

          {hero.image && (
            <div className="relative w-72 md:w-md aspect-3/4">
              <Image
                src={urlFor(hero.image).width(500).url()}
                alt="Hero image"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
