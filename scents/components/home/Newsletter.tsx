import { Mail } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Newsletter = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden ">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-purple-950 via-black to-violet-950" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
      </div>
     

      <div className="max-w-4xl mx-auto px-6 text-center ">
        {/* Glass card */}
        <div className="relative rounded-3xl bg-linear-to-br from-white/30 via-white/10 to-transparent border border-purple-200/40 p-10 md:p-14 shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-purple-600 to-violet-600 shadow-lg shadow-purple-500/30">
              <Mail className="w-6 h-6 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-primary font-bold  mb-4">
            Join Our Fragrance Circle
          </h2>

          <p className="text-white max-w-xl mx-auto mb-10">
            Be the first to know about new arrivals, exclusive offers, and
            curated fragrance picks delivered straight to your inbox.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 rounded-medium border border-purple-300 bg-white/80 px-6 py-4 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400/20 transition"
            />

            <Button
              type="submit"
              className="rounded-medium bg-linear-to-r from-purple-600 to-violet-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:opacity-90"
            >
              Subscribe
            </Button>
          </form>

          {/* Trust note */}
          <p className="mt-6 text-sm text-white/70">
            No spam. Only exclusive fragrance updates and special offers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
