'use client';

import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { sanityClient, urlFor } from "@/lib/sanity/client";

type FeaturedProduct = {
  _id: string;
  name: string;
  description: string;
  notes: string;
  price: number | string;
  image?: any;
  productRef?: { _id: string };
};

const Product = () => {
  const [products, setProducts] = useState<FeaturedProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`
        *[_type == "featuredProduct"] | order(_createdAt asc){
          _id,
          name,
          description,
          notes,
          price,
          image,
          
        }
      `)
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  const formatPrice = (price?: number | string) => {
    if (!price) return "—";
    const cleaned = typeof price === "string" ? price.replace(/[^\d.]/g, "") : price;
    const numPrice = Number(cleaned);
    if (isNaN(numPrice)) return "—";
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
    }).format(numPrice);
  };

  if (loading) {
    return (
      <section className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-200 h-96 rounded-xl" />
          ))}
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-24 text-center">
        <p className="text-muted-foreground text-lg">No featured products available.</p>
      </section>
    );
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-[#fbf9ff] via-white to-[#f3efff]" />
        <div className="absolute top-32 left-24 w-104 h-104 bg-violet-300/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-32 right-24 w-88 h-88 bg-purple-200/25 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <span className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full bg-purple-100 text-purple-700 text-xs font-medium tracking-widest shadow-sm">
            Featured Collection
          </span>

          <h2 className="font-serif text-4xl md:text-5xl text-purple-900 mb-6 tracking-wide">
            Most Loved Scents
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Our best-selling fragrances celebrated for their elegance, versatility, and unforgettable presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {products.map((product, index) => (
            <ProductCard
              key={product._id}
              name={product.name}
              description={product.description}
              notes={product.notes}
              price={formatPrice(product.price)}
              image={product.image && urlFor(product.image).width(400).url()}
              className={`animate-fade-up animation-delay-${(index + 1) * 150}`}
            />
          ))}
        </div>

        <div className="mt-28 flex justify-center">
          <Button
            variant="outline"
            className="group flex items-center gap-3 px-10 py-6 rounded-md border-purple-300 text-purple-800 bg-white/60 backdrop-blur hover:bg-purple-50 hover:border-purple-400 transition-all shadow-sm"
          >
            <Link href="/products">View Full Collection</Link>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Product;
