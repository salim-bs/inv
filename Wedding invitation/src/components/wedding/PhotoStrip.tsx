import photo1 from "@/assets/1 (1).jpg";
import photo2 from "@/assets/1 (2).jpg";

import { motion } from "framer-motion";

const photos = [
  { src: photo1, alt: "Our Photo 1", delay: 0 },
  { src: photo2, alt: "Our Photo 2", delay: 0.2, className: "md:translate-y-12" },
];

const PhotoStrip = () => {
  return (
    <section className="py-24 px-4 bg-wedding-cream/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Creative Photo Grid / Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 gap-4 pb-12 -mx-4 md:mx-auto md:max-w-4xl md:grid md:grid-cols-2 md:gap-16 md:pb-0 md:overflow-visible justify-center">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: photo.delay, ease: "easeOut" }}
              className={`relative group flex-shrink-0 w-[85vw] md:w-auto snap-center ${photo.className || ""}`}
            >
              {/* Floating Gold Frame (Background) */}
              <div
                className="absolute top-4 -right-4 w-full h-full border border-wedding-gold/60 rounded-sm z-0 transition-transform duration-500 ease-out group-hover:translate-x-[-1rem] group-hover:translate-y-[1rem]"
              />

              {/* Image Container */}
              <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm shadow-md">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                  draggable="false"
                />

                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-wedding-charcoal/0 group-hover:bg-wedding-charcoal/10 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Artistic Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-24 md:mt-32 max-w-2xl mx-auto relative"
        >
          {/* Decorative Line */}
          <div className="w-px h-16 bg-wedding-gold/40 mx-auto mb-6" />

          <p className="text-center text-wedding-charcoal/80 italic font-elegant text-3xl md:text-5xl leading-tight">
            "Every love story is beautiful,<br /> but ours is my favorite"
          </p>

          {/* Decorative Line */}
          <div className="w-px h-16 bg-wedding-gold/40 mx-auto mt-6" />
        </motion.div>

      </div>
    </section>
  );
};

export default PhotoStrip;
