import { works } from "../../common/constants/works";
import Image from "next/image";
import { DiagonalReveal } from "../common/image-reveal";

export default function WorksSection() {
  return (
    <section
      id="works"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-[#d3a250]">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we&apos;ve helped businesses transform their
            digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <WorksCard
              {...work}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface WorksCardProps {
  title: string;
  category: string;
  image: string;
}

const WorksCard = ({ title, category, image }: WorksCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <DiagonalReveal>
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </DiagonalReveal>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/80">{category}</p>
      </div>
    </div>
  );
};
