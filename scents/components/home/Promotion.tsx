
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { sanityClient, urlFor } from "@/lib/sanity/client";

type PromotionData = {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: any;
};

const Promotion = () => {
  const [promotion, setPromotion] = useState<PromotionData | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "promotion"][0]{
          badge,
          title,
          description,
          buttonText,
          buttonLink,
          image
        }`
      )
      .then(setPromotion);
  }, []);

  if (!promotion) return null; // or skeleton if you want

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-[#faf7ff] via-white to-[#f4f1ff]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="relative p-10 md:p-12">
          {promotion.badge && (
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
              {promotion.badge}
            </span>
          )}

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            {promotion.title}
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            {promotion.description}
          </p>

          {promotion.buttonText && promotion.buttonLink && (
            <Button
              variant="outline"
              className="group flex items-center gap-3 px-8 py-6 bg-linear-to-r from-purple-600 to-violet-600 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 hover:opacity-90 transition-all"
            >
              <Link href={promotion.buttonLink}>
                {promotion.buttonText}
              </Link>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
        </div>

        {/* Image */}
        <div className="relative flex justify-center">
          {promotion.image && (
            <Image
              src={urlFor(promotion.image).width(400).url()}
              alt={promotion.title || "Promotion image"}
              width={400}
              height={400}
              className="relative z-10 shadow-2xl"
            />
          )}

          <div className="absolute -bottom-6 h-1 w-32 bg-linear-to-r from-purple-400 to-violet-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Promotion;
