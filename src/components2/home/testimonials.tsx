import { Star } from "lucide-react";
import LazyImage from "../common/lazyImage";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Destiny's Art Lab transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      content:
        "The team's expertise in digital marketing helped us achieve a 300% increase in online engagement. Truly exceptional work.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, DesignSpace",
      content:
        "From concept to execution, Destiny's Art Lab delivered a stunning website that perfectly captures our brand essence.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
      <div className="absolute inset-0 opacity-10">
        <LazyImage
          src="/placeholder.svg?height=800&width=1200"
          alt="Testimonials Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our <span className="text-yellow-400">Clients Say</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say
            about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-white/90 leading-relaxed mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <LazyImage
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
