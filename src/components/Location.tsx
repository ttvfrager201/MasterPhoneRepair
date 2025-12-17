import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#0F172A] relative overflow-hidden">
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
            className="inline-block px-4 py-2 bg-[#1E88E5]/20 text-[#64B5F6] rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Find Us
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Visit Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#64B5F6]">
              Shop
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Conveniently located in the heart of Detroit
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.9664619655914!2d-83.2033915!3d42.3432384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b35bac534a9e7%3A0xfd7ccd2b993bab22!2sMaster%20Phone%20Repair!5e0!3m2!1sen!2sus!4v1765938443168!5m2!1sen!2sus"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-8 lg:p-12 flex flex-col justify-center"
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-xl flex-shrink-0 shadow-lg shadow-blue-500/20">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                  <p className="text-blue-200 leading-relaxed">
                    16151 W Warren Ave,
                    <br />
                    Detroit, MI 48228
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-xl flex-shrink-0 shadow-lg shadow-blue-500/20">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <a
                    href="tel:+13133559361"
                    className="text-blue-200 hover:text-blue-400 transition-colors text-lg font-mono-accent"
                  >
                    (313) 355-9361
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-xl flex-shrink-0 shadow-lg shadow-blue-500/20">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                  <div className="text-blue-200 space-y-1">
                    <p>
                      <strong>Monday – Friday:</strong> 9:00 AM – 8:00 PM
                    </p>
                    <p>
                      <strong>Saturday:</strong> 10:00 AM – 8:00 PM
                    </p>
                    <p>
                      <strong>Sunday:</strong> 10:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 flex-1 py-6 text-lg font-bold uppercase tracking-wide rounded-xl backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps?sca_esv=d49a4369f0d2dc0b&rlz=1C1RXQR_enUS1151US1151&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiFE1hc3RlciBQaG9uZSBSZXBhaXIKMg0QABiwAxjWBBhHGMkDMgoQABiwAxjWBBhHMg4QABiABBiwAxiSAxiKBTIOEAAYgAQYsAMYkgMYigUyDRAAGIAEGLADGEMYigVIqxFQ2ANY0g9wA3gBkAEAmAEAoAEAqgEAuAEDyAEA-AEC-AEBmAIDoAIemAMAiAYBkAYFkgcBM6AHALIHALgHAMIHBTItMi4xyAcTgAgA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KeepNMW6NTuIMSKrO5krzXz9&daddr=16151+W+Warren+Ave,+Detroit,+MI+48228",
                    )
                  }
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
