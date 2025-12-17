import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Incredible service! My iPhone screen was replaced in under an hour. The quality is perfect and the price was very reasonable. Highly recommend!',
    location: 'Detroit, MI'
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: 'Best phone repair shop in Detroit! They fixed my water-damaged phone when others said it was impossible. Professional and fast service.',
    location: 'Detroit, MI'
  },
  {
    name: 'Emily Rodriguez',
    rating: 5,
    text: 'Amazing experience from start to finish. The staff was knowledgeable, friendly, and my phone works like new. The lifetime warranty gives me peace of mind.',
    location: 'Detroit, MI'
  },
  {
    name: 'David Thompson',
    rating: 5,
    text: 'Quick turnaround and excellent customer service. They explained everything clearly and the repair was done perfectly. Will definitely come back!',
    location: 'Detroit, MI'
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-[#1E88E5]/10 text-[#1E88E5] rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#42A5F5]">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from real customers in Detroit
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main testimonial card */}
            <div className="glass-card-light rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-32 h-32 text-blue-600" />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-8 text-center font-medium"
                >
                  "{testimonials[currentIndex].text}"
                </motion.p>

                {/* Author info */}
                <motion.div
                  key={`author-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="font-bold text-xl text-[#0F172A] mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].location}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </Button>
              
              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-[#1E88E5] w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </Button>
            </div>
          </motion.div>

          {/* Additional testimonials grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="glass-card-light rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-sm text-[#0F172A]">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
