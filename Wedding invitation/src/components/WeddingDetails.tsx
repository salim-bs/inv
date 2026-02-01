import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, Heart, ArrowLeft, Church, PartyPopper, Gem } from "lucide-react";

export interface WeddingLocation {
    id: string;
    title: string; // e.g. "Ceremony"
    name: string; // Venue Name
    address: string;
    time: string;
    mapEmbedUrl: string;
    icon?: 'church' | 'party' | 'ring';
}

interface WeddingDetailsProps {
    groomName: string;
    brideName: string;
    locations: WeddingLocation[];
}

const WeddingDetails = ({
    groomName,
    brideName,
    locations
}: WeddingDetailsProps) => {
    const [selectedLocation, setSelectedLocation] = useState<WeddingLocation | null>(null);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="w-full px-6 py-16 flex flex-col items-center bg-wedding-cream min-h-[600px] justify-center">
            {/* Header - Always visible */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="text-center mb-12"
            >
                <motion.div variants={itemVariants} className="flex flex-col items-center">
                    <p className="font-sans text-wedding-sage text-sm tracking-[0.3em] uppercase mb-4">
                        The Details
                    </p>
                    <div className="flex items-center gap-4 font-elegant text-4xl md:text-5xl text-wedding-charcoal">
                        <span>{groomName}</span>
                        <Heart className="w-5 h-5 text-wedding-sage fill-wedding-sage/50" />
                        <span>{brideName}</span>
                    </div>
                </motion.div>
            </motion.div>

            <AnimatePresence mode="wait">
                {!selectedLocation ? (
                    /* SELECTION VIEW */
                    <motion.div
                        key="selection"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
                    >
                        {locations.map((loc) => (
                            <motion.div
                                key={loc.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedLocation(loc)}
                                className="cursor-pointer group relative p-8 border border-wedding-sage/30 rounded-lg bg-white/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center gap-4"
                            >
                                {/* Corner Decorations */}
                                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-wedding-sage/40" />
                                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-wedding-sage/40" />
                                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-wedding-sage/40" />
                                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-wedding-sage/40" />

                                <div className="mb-2">
                                    {loc.icon === 'party' ? (
                                        <PartyPopper className="w-10 h-10 text-wedding-rose" />
                                    ) : loc.icon === 'ring' ? (
                                        <Gem className="w-10 h-10 text-wedding-gold" />
                                    ) : (
                                        <Church className="w-10 h-10 text-wedding-gold" />
                                    )}
                                </div>

                                <h3 className="font-elegant text-3xl text-wedding-charcoal">{loc.title}</h3>
                                <p className="font-bold text-wedding-sage">{loc.name}</p>
                                <p className="font-sans text-sm text-wedding-charcoal/70 max-w-[200px]">{loc.address}</p>

                                <span className="mt-4 text-xs tracking-widest uppercase text-wedding-sage border-b border-transparent group-hover:border-wedding-sage transition-all">
                                    View on Map
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    /* DETAILS VIEW */
                    <motion.div
                        key="details"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-2xl flex flex-col items-center"
                    >
                        <button
                            onClick={() => setSelectedLocation(null)}
                            className="self-start mb-6 text-wedding-sage hover:text-wedding-charcoal flex items-center gap-2 text-sm uppercase tracking-wider transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Locations
                        </button>

                        <div className="bg-white p-8 rounded-xl shadow-lg border border-wedding-sage/10 w-full text-center">
                            <h2 className="font-elegant text-4xl text-wedding-charcoal mb-2">{selectedLocation.title}</h2>
                            <p className="font-sans text-wedding-sage mb-8 uppercase tracking-widest text-sm">
                                {selectedLocation.name}
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-wedding-sage" />
                                    <span className="font-sans text-lg text-wedding-charcoal">{selectedLocation.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-wedding-sage" />
                                    <span className="font-sans text-lg text-wedding-charcoal">{selectedLocation.address}</span>
                                </div>
                            </div>

                            <div className="w-full rounded-lg overflow-hidden border border-wedding-sage/20 h-[300px]">
                                <iframe
                                    src={selectedLocation.mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={selectedLocation.title}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default WeddingDetails;
