import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, Clock, Heart } from "lucide-react";

interface WeddingDetailsProps {
    groomName: string;
    brideName: string;
    date: string;
    time: string;
    venue: string;
    venueAddress: string;
    mapEmbedUrl: string;
}

const WeddingDetails = ({
    groomName,
    brideName,
    date,
    time,
    venue,
    venueAddress,
    mapEmbedUrl,
}: WeddingDetailsProps) => {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    };

    return (
        <motion.div
            className="w-full px-6 py-12 flex flex-col items-center bg-wedding-cream"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Decorative top flourish */}
            <motion.div variants={itemVariants} className="mb-8">
                <svg width="120" height="40" viewBox="0 0 120 40" className="text-wedding-sage">
                    <path
                        d="M60 35C40 35 25 20 5 20M60 35C80 35 95 20 115 20M60 5C40 5 25 20 5 20M60 5C80 5 95 20 115 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                    />
                    <circle cx="60" cy="20" r="3" fill="currentColor" />
                </svg>
            </motion.div>

            {/* Names Section */}
            <motion.div variants={itemVariants} className="text-center mb-10">
                <p className="font-sans text-wedding-sage text-sm tracking-[0.3em] uppercase mb-4">
                    Together with their families
                </p>
                <h1 className="font-elegant text-5xl md:text-6xl text-wedding-charcoal leading-tight">
                    {groomName}
                </h1>
                <motion.div
                    className="flex items-center justify-center my-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Heart className="w-6 h-6 text-wedding-sage fill-wedding-sage" />
                </motion.div>
                <h1 className="font-elegant text-5xl md:text-6xl text-wedding-charcoal leading-tight">
                    {brideName}
                </h1>
                <p className="font-script text-xl text-wedding-sage-muted mt-6 italic">
                    Request the pleasure of your company
                </p>
            </motion.div>

            {/* Divider */}
            <motion.div variants={itemVariants} className="w-24 h-px bg-wedding-sage/50 mb-10" />

            {/* Date & Time */}
            <motion.div variants={itemVariants} className="text-center mb-10">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-wedding-sage" />
                    <p className="font-elegant text-2xl text-wedding-charcoal">{date}</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5 text-wedding-sage" />
                    <p className="font-sans text-lg text-wedding-charcoal/80">{time}</p>
                </div>
            </motion.div>

            {/* Venue */}
            <motion.div variants={itemVariants} className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-wedding-sage" />
                    <p className="font-elegant text-2xl text-wedding-charcoal">{venue}</p>
                </div>
                <p className="font-sans text-sm text-wedding-charcoal/60 max-w-xs">{venueAddress}</p>
            </motion.div>

            {/* Map */}
            <motion.div
                variants={itemVariants}
                className="w-full max-w-md rounded-xl overflow-hidden shadow-lg border border-wedding-sage/20"
            >
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Wedding Venue Location"
                />
            </motion.div>

            {/* Decorative bottom flourish */}
            <motion.div variants={itemVariants} className="mt-10">
                <svg width="80" height="30" viewBox="0 0 80 30" className="text-wedding-sage/50">
                    <path
                        d="M40 5C25 5 15 15 0 15M40 5C55 5 65 15 80 15M40 25C25 25 15 15 0 15M40 25C55 25 65 15 80 15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                    />
                </svg>
            </motion.div>
        </motion.div>
    );
};

export default WeddingDetails;
