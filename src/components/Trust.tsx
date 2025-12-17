import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Shield, MapPin, Award } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Most repairs completed within hours, not days. Get your device back fast.'
  },
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'All repairs backed by our comprehensive lifetime warranty for peace of mind.'
  },
  {
    icon: MapPin,
    title: 'Local & Trusted',
    description: 'Proudly serving Detroit for years. Your neighborhood repair experts.'
  },
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'Expert technicians with years of experience and professional certifications.'
  }
];

export default function Trust() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Diagonal grid pattern background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTSAwIDAgTCA4MCAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-[#1E88E5]/20 text-[#64B5F6] rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Why Us
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#64B5F6]">Us</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Detroit's most trusted phone repair shop with unmatched service quality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-xl shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-blue-200 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '10,000+', label: 'Repairs Completed' },
            { value: '4.8★', label: 'Google Rating' },
            { value: '< 2hrs', label: 'Average Repair Time' },
            { value: '100%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono-accent text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-blue-300 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
