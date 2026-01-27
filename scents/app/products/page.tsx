"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "@/lib/sanity/client";

type Category = {
  _id: string;
  title: string;
  key: string;
};

type Product = {
  _id: string;
  name: string;
  price: string;
  image?: any;
  category?: Category;
};

const formatPrice = (price?: number | string) => {
  if (!price) return "—";

  const cleaned =
    typeof price === "string" ? price.replace(/[^\d.]/g, "") : price;

  const numPrice = Number(cleaned);
  if (isNaN(numPrice)) return "—";

  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  }).format(numPrice);
};

const INITIAL_LIMIT = 10;
export default function Page() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [visibleCount, setVisibleCount] = useState(INITIAL_LIMIT);
  useEffect(() => {
    sanityClient
      .fetch(
        `
      {
        "categories": *[_type == "category"] | order(title asc),
        "products": *[_type == "perfume"]{
          _id,
          name,
          price,
          image,
          category->{
            _id,
            title,
            key
          }
        }
      }
    `,
      )
      .then((data) => {
        setCategories([
          { title: "All", key: "all", _id: "all" },
          ...data.categories,
        ]);
        setProducts(data.products);
      });
  }, []);

  const handleWhatsAppOrder = (product: Product) => {
    const phoneNumber = "254718260345";
    const message = encodeURIComponent(
      `Hello, I would like to check availability for:\n\n` +
        ` Product: ${product.name}\n` +
        ` Price: ${product.price}\n\n` +
        `Is it currently in stock?`,
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-[#fbf9ff] via-white to-[#f3efff]" />
        <div className="absolute top-32 left-20 w-104 h-104 bg-violet-300/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-32 right-20 w-88 h-88 bg-purple-200/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="inline-block mb-6 px-6 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            Our Signature Collection
          </span>

          <h1 className="font-serif text-4xl md:text-6xl text-purple-900 mb-6">
            Fragrance as an Art Form
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Thoughtfully crafted scents designed to evoke emotion, elegance, and
            quiet luxury.
          </p>
        </div>

        {/* Products */}
        <Tabs
          defaultValue="all"
          onValueChange={() => setVisibleCount(INITIAL_LIMIT)}
        >
          <TabsList
            className="
                flex w-full
                overflow-x-auto
                whitespace-nowrap
                gap-2
                bg-violet-100/70 backdrop-blur
                p-1 mb-16
                no-scrollbar
              "
          >
            {categories.map((cat) => (
              <TabsTrigger
                key={cat._id}
                value={cat.key}
                className="
                    shrink-0
                    rounded-md px-6
                    data-[state=active]:bg-white
                    data-[state=active]:shadow
                    data-[state=active]:text-purple-800
                  "
              >
                {cat.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => {
            const filtered = products.filter(
              (p) => cat.key === "all" || p.category?.key === cat.key,
            );

            return (
              <TabsContent key={cat.key} value={cat.key}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {filtered.slice(0, visibleCount).map((product) => (
                    <div
                      key={product._id}
                      className="bg-white/75 backdrop-blur-xl  p-6 shadow-sm hover:shadow-xl transition-all border border-white/60"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-2xl">
                        {product.image && (
                          <Image
                            src={urlFor(product.image).width(400).url()}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>

                      <div className="mt-6 text-center">
                        <h3 className="font-serif text-xl text-purple-900 mb-1">
                          {product.name}
                        </h3>
                        <p className="font-medium mb-4">
                          {formatPrice(product.price)}
                        </p>

                        <Button
                          onClick={() => handleWhatsAppOrder(product)}
                          className="w-full bg-linear-to-r from-purple-900 to-violet-700 text-white"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {filtered.length > visibleCount && (
                  <div className="flex justify-center mt-16">
                    <Button
                      variant="outline"
                      className="rounded-md px-10 py-6 border-purple-300 text-purple-800 bg-white/60 backdrop-blur hover:bg-purple-50 transition-all"
                      onClick={() => setVisibleCount(filtered.length)}
                    >
                      View More
                    </Button>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </main>
  );
}
