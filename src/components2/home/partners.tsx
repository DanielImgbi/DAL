import LazyImage from "../common/lazyImage";

export default function PartnersSection() {
  const partners = [
    { name: "Google", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Adobe", logo: "/placeholder.svg?height=60&width=120" },
    { name: "AWS", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Figma", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Shopify", logo: "/placeholder.svg?height=60&width=120" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Trusted <span className="text-yellow-500">Partners</span>
          </h2>
          <p className="text-xl text-slate-600">
            We collaborate with industry leaders to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <LazyImage
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
