import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiZoomIn } from "react-icons/hi";
import { certificates } from "../data/portfolioData";

const Certificates = () => {
  const [selected, setSelected] = useState<{
    title: string;
    image: string;
    description: string;
  } | null>(null);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="certificates" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            My <span className="gradient-text font-display">Certificates</span>
          </h2>
          <p className="section-subtitle">
            Professional certifications & training I've completed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group cursor-pointer"
              onClick={() => {
                setImageError(false);
                setSelected(cert);
              }}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden bg-[#0a0f1e]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <HiZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Title + Description */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:from-white group-hover:to-white transition-all text-center leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors text-center mt-1.5 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - Click to view full certificate */}
      {createPortal(
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

              {/* Modal Content */}
              <motion.div
                className="certificate-modal relative z-10 flex max-h-[92vh] w-full max-w-6xl flex-col items-center rounded-2xl bg-black/40 p-3 sm:p-5"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute -top-4 -right-4 z-20 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                >
                  <HiX className="w-5 h-5" />
                </button>

                {/* Certificate Image */}
                <div className="flex min-h-32 w-full flex-1 items-center justify-center overflow-auto rounded-xl bg-black/30">
                  {imageError ? (
                    <p className="p-6 text-center text-white">
                      Certificate image could not be loaded.
                    </p>
                  ) : (
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="certificate-modal-image h-auto max-h-[82vh] max-w-full rounded-xl border border-white/10 object-contain shadow-2xl"
                      onError={() => setImageError(true)}
                    />
                  )}
                </div>

                {/* Title */}
                <p className="text-center font-bold mt-4 text-xl gradient-text font-display">
                  {selected.title}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
};

export default Certificates;
