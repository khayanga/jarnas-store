import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";

interface ProductCardProps {
  name: string;
  description: string;
  notes: string;
  image?: any; // Sanity image object
  price?: string;
  className?: string;
}

const ProductCard = ({ name, description, notes, image, price, className }: ProductCardProps) => {
  const imageUrl =
    image && typeof image === "object" && image._type === "image"
      ? urlFor(image).width(400).url()
      : typeof image === "string"
      ? image
      : "/placeholder.jpg";

  return (
    <div
      className={cn(
        "group cursor-pointer",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden mb-6 aspect-3/4 rounded-t-full rounded-b-lg">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/5" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-serif text-xl tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>
        <p className="font-sans text-xs uppercase tracking-[0.15em] text-primary">
          {notes}
        </p>
        {price && (
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-accent text-primary"
                />
              ))}
            </div>
            <span className="font-sans font-semibold text-foreground">{price}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
