import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowLeft, Heart, PartyPopper, Gem, Church } from "lucide-react";

export interface WeddingLocation {
    id: string;
    title: string;
    name: string;
    address: string;
    time: string;
    mapEmbedUrl: string;
    icon?: 'church' | 'party' | 'ring';
    image?: string;
}

interface WeddingDetailsProps {
    locations: WeddingLocation[];
}

const WeddingDetails = ({
    locations
}: WeddingDetailsProps) => {
    const [selectedLocation, setSelectedLocation] = useState<WeddingLocation | null>(null);

    return (
        <section className="w-full px-4 py-24 bg-wedding-cream/20 min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-wedding-pink/20 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-wedding-gold/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto w-full relative z-10">

                <AnimatePresence mode="wait">
                    {!selectedLocation ? (
                        /* ================= SELECTION VIEW (THE CARDS) ================= */
                        <motion.div
                            key="selection"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="w-full"
                        >
                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <span className="text-wedding-sage text-sm tracking-[0.3em] uppercase block mb-4">
                                    The Venues
                                </span>
                                <h2 className="font-script text-5xl md:text-6xl text-wedding-charcoal mb-6">
                                    Where & When
                                </h2>
                                <p className="text-wedding-charcoal/60 font-elegant italic text-xl">
                                    Choose a location to view details
                                </p>
                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4">
                                {locations.map((loc, index) => (
                                    <motion.div
                                        key={loc.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        whileHover={{ y: -10 }}
                                        onClick={() => setSelectedLocation(loc)}
                                        className="group cursor-pointer bg-white rounded-sm p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-wedding-sage/10 hover:border-wedding-gold/40 relative overflow-hidden"
                                    >
                                        {/* Hover Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-wedding-gold/0 to-wedding-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10 flex flex-col items-center text-center">
                                            {/* Icon */}
                                            <div className="mb-6 p-4 rounded-full bg-wedding-cream/50 text-wedding-gold group-hover:bg-wedding-gold group-hover:text-white transition-colors duration-500">
                                                {loc.icon === 'party' ? (
                                                    <PartyPopper className="w-8 h-8" />
                                                ) : loc.icon === 'ring' ? (
                                                    <Gem className="w-8 h-8" />
                                                ) : (
                                                    <Church className="w-8 h-8" />
                                                )}
                                            </div>

                                            {/* Title */}
                                            <h3 className="font-script text-4xl md:text-5xl text-wedding-charcoal mb-3 group-hover:text-wedding-gold transition-colors duration-300">
                                                {loc.title}
                                            </h3>

                                            {/* Venue Name */}
                                            <p className="font-elegant text-xl uppercase tracking-widest text-wedding-sage mb-6">
                                                {loc.name}
                                            </p>

                                            {/* "View Details" Link styling */}
                                            <span className="text-xs uppercase tracking-[0.2em] text-wedding-charcoal/40 border-b border-transparent group-hover:border-wedding-gold group-hover:text-wedding-gold transition-all duration-300">
                                                View Details
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        /* ================= DETAILS VIEW (EXPANDED) ================= */
                        <motion.div
                            key="details"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-sm shadow-2xl overflow-hidden border border-wedding-sage/10 mx-auto max-w-4xl"
                        >
                            {/* Navigation Header */}
                            <div className="p-6 border-b border-wedding-sage/10 flex items-center justify-between bg-wedding-cream/10">
                                <button
                                    onClick={() => setSelectedLocation(null)}
                                    className="flex items-center gap-2 text-sm uppercase tracking-wider text-wedding-sage hover:text-wedding-gold transition-colors font-sans font-medium"
                                >
                                    <ArrowLeft className="w-4 h-4" /> Back to Venues
                                </button>
                                <div className="hidden md:flex items-center gap-2 text-wedding-gold/50">
                                    <Heart className="w-4 h-4 fill-current" />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row">
                                {/* Left: Image */}
                                <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-wedding-charcoal">
                                    {selectedLocation.image && (
                                        <img
                                            src={selectedLocation.image}
                                            alt={selectedLocation.name}
                                            className="w-full h-full object-cover opacity-90"
                                            loading="lazy"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                        <h2 className="font-script text-5xl text-white drop-shadow-md">
                                            {selectedLocation.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Right: Info */}
                                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <h3 className="font-elegant text-3xl text-wedding-charcoal mb-2">
                                        {selectedLocation.name}
                                    </h3>
                                    <div className="w-12 h-0.5 bg-wedding-gold mb-8" />

                                    <div className="space-y-8">
                                        <div className="flex items-start gap-4">
                                            <Clock className="w-5 h-5 text-wedding-gold mt-1" />
                                            <div>
                                                <h4 className="font-sans text-xs uppercase tracking-widest text-wedding-sage mb-1">Time</h4>
                                                <p className="font-elegant text-xl text-wedding-charcoal">{selectedLocation.time}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <MapPin className="w-5 h-5 text-wedding-gold mt-1" />
                                            <div>
                                                <h4 className="font-sans text-xs uppercase tracking-widest text-wedding-sage mb-1">Address</h4>
                                                <p className="font-elegant text-xl text-wedding-charcoal">{selectedLocation.address}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Map Preview */}
                                    <div className="mt-8 pt-8 border-t border-wedding-sage/10">
                                        <div className="w-full h-40 bg-wedding-cream/50 rounded-sm overflow-hidden border border-wedding-sage/20 relative group">
                                            <iframe
                                                src={selectedLocation.mapEmbedUrl}
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0, filter: "grayscale(100%) opacity(0.8)" }}
                                                className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                                allowFullScreen
                                                loading="lazy"
                                                title={selectedLocation.title}
                                            />
                                            <div className="absolute inset-0 pointer-events-none border border-wedding-gold/20" />
                                        </div>
                                        <a
                                            href={selectedLocation.mapEmbedUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block text-center text-xs uppercase tracking-widest text-wedding-sage mt-3 hover:text-wedding-gold transition-colors"
                                        >
                                            Open in Google Maps
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default WeddingDetails;
