import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform
} from "framer-motion";
import { useEffect, useState } from "react";
import { heroSlides } from "../data/heroSlides";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();

  // 🎢 Parallax subtil
  const bgY = useTransform(scrollY, [0, 300], [0, 80]);

  // ⏳ Slider automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // ⚡ Lazy preload images
  useEffect(() => {
    heroSlides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* BACKGROUND */}
      <AnimatePresence>
        <motion.div
          key={index}
          style={{ y: bgY }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className={`absolute inset-0 bg-cover bg-${slide.position}`}
          style={{
            backgroundImage: `url(${slide.image})`
          }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-slate-900/80 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className={`text-4xl md:text-6xl font-bold leading-tight mb-6 ${slide.textColor}`}
              >
                {slide.title}
              </h1>

              <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-12">
                {slide.subtitle}
              </p>

              {/* BARRE ACCENT */}
              <div
                className={`h-1 w-24 mb-10 bg-gradient-to-r ${slide.accent}`}
              />
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="/services"
              className="bg-accent px-8 py-4 rounded-xl font-semibold
                         hover:scale-105 transition"
            >
              Découvrir nos solutions
            </a>
            <a
              href="/contact"
              className="border border-white/40 px-8 py-4 rounded-xl
                         hover:bg-white hover:text-primary transition"
            >
              Parler à un expert
            </a>
          </motion.div>
        </div>
      </div>

      {/* INDICATEURS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-white scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
