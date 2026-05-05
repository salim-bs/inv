import photo1 from "@/assets/1 (1).jpg";
import photo2 from "@/assets/1 (2).jpg";

import { motion } from "framer-motion";

const photos = [
  { src: photo1, alt: "Our Photo 1", delay: 0 },
  { src: photo2, alt: "Our Photo 2", delay: 0.2, className: "md:translate-y-12" },
];

const PhotoStrip = () => {
  return (
    <section className="py-24 px-4 bg-wedding-cream/30 overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-wedding-pink/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-wedding-gold/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Creative Scrapbook Photo Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center relative mt-12 md:mt-24">
          
          {/* Photo 1 (Left / Top) */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: -4 }}
            whileHover={{ scale: 1.05, rotate: -2, zIndex: 30 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-[85%] max-w-md md:w-[42%] md:-mt-20 flex-shrink-0"
          >
            {/* Scrapbook Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/70 shadow-sm border border-black/5 -rotate-3 z-20 backdrop-blur-md" />
            
            {/* Polaroid Frame */}
            <div className="bg-white p-4 pb-12 md:p-6 md:pb-16 shadow-2xl rounded-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-wedding-charcoal/5">
                <img
                  src={photo1}
                  alt="Our Photo 1"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-wedding-charcoal/0 hover:bg-wedding-charcoal/10 transition-colors duration-500" />
              </div>
              <p className="font-script text-3xl md:text-4xl text-wedding-charcoal/80 text-center mt-6 -mb-2">
                You & Me
              </p>
            </div>
          </motion.div>

          {/* Photo 2 (Right / Bottom) */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 5 }}
            whileHover={{ scale: 1.05, rotate: 3, zIndex: 30 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-20 w-[85%] max-w-md md:w-[42%] -mt-24 md:mt-32 md:-ml-12 flex-shrink-0"
          >
            {/* Scrapbook Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/70 shadow-sm border border-black/5 rotate-2 z-20 backdrop-blur-md" />
            
            {/* Polaroid Frame */}
            <div className="bg-white p-4 pb-12 md:p-6 md:pb-16 shadow-2xl rounded-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-wedding-charcoal/5">
                <img
                  src={photo2}
                  alt="Our Photo 2"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-wedding-charcoal/0 hover:bg-wedding-charcoal/10 transition-colors duration-500" />
              </div>
              <p className="font-script text-3xl md:text-4xl text-wedding-charcoal/80 text-center mt-6 -mb-2">
                Forever
              </p>
            </div>
          </motion.div>

        </div>

        {/* Artistic Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mt-32 md:mt-40 max-w-2xl mx-auto relative z-10"
        >
          {/* Decorative Line */}
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-wedding-gold/40 mx-auto mb-8" />

          <p className="text-center text-wedding-charcoal/80 italic font-elegant text-3xl md:text-5xl leading-tight px-4">
            "Every love story is beautiful,<br /> but ours is my favorite"
          </p>

          {/* Decorative Line */}
          <div className="w-px h-16 bg-gradient-to-t from-transparent to-wedding-gold/40 mx-auto mt-8" />
        </motion.div>

      </div>
    </section>
  );
};

export default PhotoStrip;
