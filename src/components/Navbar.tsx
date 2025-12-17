import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Location", href: "#location" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToQuote = () => {
    setIsMobileMenuOpen(false);
    document
      .getElementById("quote-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#");
              }}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="https://i.ibb.co/Rpk9dMF9/Masterphonerepair.png"
                alt="Master Phone Repair"
                className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`font-semibold text-sm uppercase tracking-wide transition-colors ${
                    isScrolled
                      ? "text-[#0F172A] hover:text-[#1E88E5]"
                      : "text-white hover:text-[#64B5F6]"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="tel:+13133559361"
                className={`flex items-center gap-2 font-semibold transition-colors ${
                  isScrolled ? "text-[#0F172A]" : "text-white"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-3.2 h-3.2" />
                <span className="font-mono-accent">(313)355-9361</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToQuote}
                  className="bg-gradient-to-r from-[#DC2626] to-[#EF4444] hover:from-[#B91C1C] hover:to-[#DC2626] text-white px-6 py-2 font-bold uppercase tracking-wide rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Request Quote
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled ? "text-[#0F172A]" : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-b from-[#0F172A] to-[#1E3A5F] shadow-2xl"
            >
              <div className="p-6 pt-24">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-white text-lg font-semibold uppercase tracking-wide py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <a
                    href="tel:+13135551234"
                    className="flex items-center gap-3 text-white mb-4"
                  >
                    <div className="p-2 bg-[#1E88E5] rounded-lg">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-mono-accent text-lg">
                      (313) 555-1234
                    </span>
                  </a>
                  <a
                    href="#location"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#location");
                    }}
                    className="flex items-center gap-3 text-white/80 mb-6"
                  >
                    <div className="p-2 bg-white/10 rounded-lg">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-sm">Detroit, MI</span>
                  </a>
                  <Button
                    onClick={scrollToQuote}
                    className="w-full bg-gradient-to-r from-[#DC2626] to-[#EF4444] hover:from-[#B91C1C] hover:to-[#DC2626] text-white py-4 font-bold uppercase tracking-wide rounded-lg shadow-lg"
                  >
                    Request Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
