import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx-Ol4IwAGUZtLzCLFZbs_2_c57S9be-nNrJXGAvdUJsECNeSboxuYrDa74_Y7Mi1uchOjtYBUZZbrjwT1sZ3vy7YKNWOZTGsEoN2M2xCba3xNRT6UZHceQD83uyBkEfhJ4pQJP=s1360-w1360-h1020-rw",
    alt: "iPhone screen repair",
    title: "iPhone Screen Repair",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyZkeUZkzCwBA6ZbPN0cnBX-FWtws15OQuYLmCVMLHLA-xWFzFugb4raWE2_Ixy_l4sNGXRA0d7oxtgeJxhI1z4bHcI5OUCW3XC2ABTapNcHew_2UK67T2l2seqnPepY56qYz7U=s1360-w1360-h1020-rw",
    alt: "Phone repair tools",
    title: "Professional Tools",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxXSoyZwBf1OUV_rqlPwFqjkKzPng2YDNaWtk0Z9G-AxTHRk4TcBTaRPjzPrgQIQWXEEXdqa9VL6OsIZTXkW78dr3_Jo4r3Z1ujcqaYjN4-foBi6goikIsSQO49fqX8cyHsv24UtA=s1360-w1360-h1020-rw",
    alt: "Samsung repair",
    title: "Samsung Galaxy Repair",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxqM_Yw2miRq7Kh1HCaDS4NeXFSSTrXwZj9DIYHkCft87WjAYumuw4-GzAPMRFpcwrcakPtsI-unrITdQ7UxlsRZnMFQvvlFQGEGtzCuZLQn3KKN3tJ5jteH-jJTPCMNsO39f4HXQ=s1360-w1360-h1020-rw",
    alt: "Phone battery replacement",
    title: "Battery Replacement",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxAS5OW7x9XURhyLV35xRm7gauvbq1bdOchoX4rDKmqHlWr77w3-ucRfkAAZXwNCDj6ITkA0EPmxbr5FQv7snod3kH88QwlcRXv_bUFhIJ4lEgho9nAQ5TXGEQxSbJGGyBeiduB=s1360-w1360-h1020-rw",
    alt: "Phone repair workspace",
    title: "Our Workspace",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzmPXykwQYyCbUUy998noj-KuJ9hNsSBWp3BHyc2bKGsMg5flyF1-YeeWRH4CPfaRJnyG6ypUJJ1ZAHQdB4T-CM9zth6epIfsKewsDinZGuXEI0GKGFBvP4yKdxgAutQQ7qfG4=s1360-w1360-h1020-rw",
    alt: "Repaired phones",
    title: "Quality Results",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-32 bg-[#0F172A] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
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
            className="inline-block px-4 py-2 bg-[#1E88E5]/20 text-[#64B5F6] rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Our Work
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Repair{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#64B5F6]">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See the quality of our work. Every repair is done with precision and
            care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {image.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#64B5F6]">
                    <ZoomIn className="w-4 h-4" />
                    <span className="text-sm">Click to enlarge</span>
                  </div>
                </div>
              </div>

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#1E88E5]/50 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_rgba(30,136,229,0.3)]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src.replace("w=600", "w=1200")}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white text-2xl font-bold mt-6 text-center"
              >
                {selectedImage.title}
              </motion.h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
