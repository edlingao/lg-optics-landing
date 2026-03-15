import Image from "next/image";

export default function Brands() {
  const brands = [
    { name: "FF", logo: "/ff-logo.png" },
    { name: "Hashtag", logo: "/hashtag-logo.png" },
    { name: "Olive", logo: "/olive-logo.png" }
  ];

  const additionalBrands = [
    "Ray-Ban", "Oakley", "Prada", "Gucci", "Armani",
    "Tommy Hilfiger", "Calvin Klein", "Hugo Boss"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Simple */}
        <div className="text-center mb-12">
          <h2 className="font-roots text-2xl md:text-3xl font-bold text-navy-900">
            Marcas que Trabajamos
          </h2>
        </div>

        {/* Single row of logos - grayscale with hover opacity */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="relative w-24 h-24 md:w-32 md:h-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Additional brands - horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible md:mx-0 md:px-0">
          <div className="flex md:flex-wrap justify-start md:justify-center gap-4 md:gap-6 min-w-max md:min-w-0">
            {additionalBrands.map((brand, index) => (
              <span
                key={index}
                className="text-gray-500 hover:text-navy-900 font-sans text-sm md:text-base transition-colors duration-300 whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
