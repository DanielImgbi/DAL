import LazyImage from "../common/lazyImage";

export default function WorksSection() {
  const works = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Brand Identity Suite",
      category: "Branding",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "3D Product Visualization",
      category: "3D Modeling",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Modern Office Complex",
      category: "Architecture",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <section
      id="works"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-yellow-500">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we&apos;ve helped businesses transform their
            digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <LazyImage
                src={work.image}
                alt={work.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-white/80">{work.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
