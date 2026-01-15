import Image from "next/image";

const images = [
  "/perfume8.jpg",
  "/perfume9.jpg",
  "/perfume10.jpg",
  "/perfume5.jpg",
];

const Gallery = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <a
            href="https://www.instagram.com/jarnas_scents?igsh=MXEzcXgzam5odjY5Mg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground hover:text-purple-700 transition-colors cursor-pointer">
              FOLLOW ON @JARNAS.
            </h2>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={img}
                width={500}
                height={500}
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
