import { Award, TrendingUp, Sparkles } from "lucide-react";

const services = [
  {
    title: "Curated Luxury Collection",
    description:
      "We carefully select premium perfumes from renowned brands worldwide, offering scents that elevate every moment.",
    icon: Sparkles,
  },
  {
    title: "Authentic & Trusted Brands",
    description:
      "Every fragrance is 100% authentic and sourced from verified suppliers for quality you can trust.",
    icon: Award,
  },
  {
    title: "Fragrances for Every Occasion",
    description:
      "From daily wear to statement scents, our collection suits every mood, season, and style.",
    icon: TrendingUp,
  },
];

const Services = () => {
  return (
    <section className="relative py-20 md:py-32  overflow-hidden ">
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-purple-950 via-black to-violet-950" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="text-center mb-20 px-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-purple-300 mb-6">
          Why Choose Us
        </span>

      <h2 className="text-3xl md:text-4xl font-serif font-bold text-purple-600 mb-4">
          Our Fragrance Collection
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto">
          A handpicked selection of premium perfumes designed to express
          confidence, elegance, and individuality.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative rounded-3xl p-0.5 bg-linear-to-br from-white/30 via-white/10 to-transparent"
          >
            <div className="relative h-full rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-purple-500/10 to-violet-500/10" />

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-purple-500 to-violet-600 shadow-lg shadow-purple-500/40">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-serif font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Accent line */}
                <div className="h-1 w-12 bg-linear-to-r from-purple-400 to-violet-500 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

