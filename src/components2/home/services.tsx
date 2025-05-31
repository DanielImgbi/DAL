import { Palette, Monitor, Smartphone, Video, Globe, Box, Home, Layers } from "lucide-react";
import LazyImage from "../common/lazyImage";
export default function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: "Branding Identity Design",
      description: "Create memorable brand identities that resonate with your audience",
    },
    {
      icon: Video,
      title: "Graphic & Motion Design",
      description: "Stunning visuals and animations that bring your ideas to life",
    },
    {
      icon: Globe,
      title: "Digital Marketing Management",
      description: "Strategic campaigns that drive engagement and growth",
    },
    {
      icon: Monitor,
      title: "Web Development",
      description: "Responsive websites built with cutting-edge technology",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
    },
    {
      icon: Box,
      title: "3D Modeling",
      description: "Detailed 3D models and visualizations for any project",
    },
    {
      icon: Home,
      title: "Architectural Design",
      description: "Innovative architectural solutions and visualizations",
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "User-centered design that enhances digital experiences",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 relative"
    >
      {/* Background with provided image */}
      <div className="absolute inset-0 opacity-5">
        <LazyImage
          src="/placeholder.svg?height=800&width=1200"
          alt="Services Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive digital solutions that drive results
            and exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
