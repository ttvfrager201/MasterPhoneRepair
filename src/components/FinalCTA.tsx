import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#DC2626] to-[#EF4444] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Don't Wait — Get Your Device Fixed Today!
          </h2>
          <p className="text-xl md:text-2xl text-red-100 mb-10 max-w-2xl mx-auto">
            Same-day repairs available. Walk-ins welcome. Expert service guaranteed.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#DC2626] px-10 py-7 text-xl font-bold uppercase tracking-wide rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 active:scale-95 group"
              onClick={() => window.location.href = 'tel:+13135551234'}
            >
              <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Call (313) 555-1234
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-10 py-7 text-xl font-bold uppercase tracking-wide rounded-xl backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95"
              onClick={scrollToQuote}
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              Request Quote
            </Button>
          </motion.div>

          {/* Quick info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Phone, text: 'Call for Instant Quote' },
              { icon: MapPin, text: 'Walk-Ins Welcome' },
              { icon: MessageSquare, text: 'Same-Day Service' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <p className="text-white font-semibold">{item.text}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
