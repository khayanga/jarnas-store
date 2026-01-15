import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-primary-foreground pt-24 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-purple-950 via-black to-violet-950" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl tracking-widest mb-4">
              JARNAS
            </h3>
            <p className="text-sm text-primary-foreground/75 leading-relaxed max-w-md mb-8">
              Your go to destination for premium scents, curated to elevate your everyday experiences with elegance and charm.
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/jarnas_scents?igsh=MXEzcXgzam5odjY5Mg%3D%3D&utm_source=qr" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all hover:scale-110 hover:bg-linear-to-tr hover:from-purple-400 hover:to-pink-400"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 text-white">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <p>Nairobi, Kenya</p>
              <a
                href="mailto:jarnasscents@gmail.com"
                className="hover:text-white transition-colors"
              >
                jarnasscents@gmail.com
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 text-white">
              Explore
            </h4>
            <nav className="flex flex-col space-y-3 text-sm">
              <Link
                href="/https://www.instagram.com/jarnas_scents?igsh=MXEzcXgzam5odjY5Mg%3D%3D&utm_source=qr"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/contact"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                About Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Brand Watermark */}
        <div className="relative border-t border-white/20 pt-16">
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-widest text-white/10 text-center select-none pointer-events-none">
            JARNAS
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-8 border-t border-white/20">
          <p className="text-xs tracking-wider text-primary-foreground/80">
            © {new Date().getFullYear()} Jarnas Scents. All rights reserved.
          </p>

          <p className="text-xs mt-4 md:mt-0 text-primary-foreground/80">
            Powered by{" "}
            <a
              href="https://www.zuritech.co.ke/"
              target="_blank"
              className="text-white hover:text-purple-400 font-medium transition-colors"
            >
              Zuri Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
