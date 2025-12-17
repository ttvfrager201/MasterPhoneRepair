import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Smartphone, 
  Battery, 
  Droplets, 
  Camera, 
  Volume2, 
  Wifi, 
  Zap, 
  Shield,
  Tablet
} from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Screen Replacement',
    description: 'Cracked or shattered screen? We replace it with high-quality parts.',
    featured: true
  },
  {
    icon: Battery,
    title: 'Battery Replacement',
    description: 'Restore your device\'s battery life with genuine replacements.'
  },
  {
    icon: Droplets,
    title: 'Water Damage Repair',
    description: 'Expert liquid damage recovery with specialized cleaning.'
  },
  {
    icon: Camera,
    title: 'Camera Repair',
    description: 'Fix blurry, broken, or malfunctioning cameras.'
  },
  {
    icon: Volume2,
    title: 'Speaker & Mic',
    description: 'Restore crystal-clear audio quality to your device.'
  },
  {
    icon: Wifi,
    title: 'Charging Port',
    description: 'Fix loose or non-working charging ports quickly.'
  },
  {
    icon: Zap,
    title: 'Power Button',
    description: 'Repair or replace unresponsive power buttons.'
  },
  {
    icon: Shield,
    title: 'Back Glass',
    description: 'Replace cracked back glass with precision.'
  },
  {
    icon: Tablet,
    title: 'Tablet Repair',
    description: 'Complete repair services for all tablet models.'
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMxRTQwQUYiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
      </div>

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
            What We Fix
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#42A5F5]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional repair services for all major phone brands and models
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = service.featured;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative ${isFeatured ? 'md:col-span-2' : ''}`}
              >
                <div
                  onClick={scrollToQuote}
                  className="glass-card-light rounded-2xl p-8 h-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 transition-all duration-300 rounded-2xl"></div>
                  
                  {/* Glowing border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-xl shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#1E88E5] transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {isFeatured && (
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                        <span>Most Popular</span>
                        <Shield className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
