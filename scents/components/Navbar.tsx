"use client";

import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

const HeaderBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const headerLinks = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  // WhatsApp link
  const whatsappNumber = "+254718260345";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Scents Logo"
              width={180}
              height={180}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm uppercase tracking-[0.15em] transition-colors duration-300",
                  isActive(link.href)
                    ? "text-purple-800"
                    : "text-muted-foreground hover:text-foreground",
                  "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-purple-800 after:transition-all after:duration-300",
                  isActive(link.href)
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              asChild
              className="group flex items-center gap-3 px-10 py-5 hover:text-white rounded- bg-linear-to-r from-purple-900 to-violet-700 text-white transition-all shadow-sm"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Order Now
                <ShoppingCart className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-64 py-6" : "max-h-0"
          )}
        >
          <nav className="flex flex-col space-y-4">
            {headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm uppercase tracking-[0.15em] transition-colors",
                  isActive(link.href)
                    ? "text-purple-800"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Order Now Button */}
            <Button
              asChild
              className="mt-4 flex items-center justify-center gap-3 px-6 py-3 bg-linear-to-r from-purple-900 to-violet-700 text-white rounded shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Order Now
                <ShoppingCart className="w-4 h-4" />
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
