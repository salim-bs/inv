import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

interface InvitationMessageProps {
    message?: string;
}

const InvitationMessage = ({
    message = "With Love. We can't wait to celebrate with you"
}: InvitationMessageProps) => {
    const ref = useRef(null);
    // @ts-ignore - framer-motion types might be slightly different in this env, but functionality works
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="py-24 px-6 bg-wedding-warm-white"
        >
            <motion.div
                className="max-w-2xl mx-auto text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Decorative element */}
                <motion.div
                    className="mb-8 flex justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Heart className="w-16 h-16 text-wedding-gold fill-wedding-gold/20" strokeWidth={1} />
                </motion.div>

                {/* Message text */}
                <p className="font-script text-4xl md:text-5xl lg:text-6xl text-wedding-gold leading-tight drop-shadow-sm">
                    "{message}"
                </p>

                {/* Bottom decoration */}
                <motion.div
                    className="mt-10 flex items-center justify-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="w-16 h-px bg-wedding-gold/40" />
                    <Heart className="w-4 h-4 text-wedding-gold/60 fill-wedding-gold/40" />
                    <div className="w-16 h-px bg-wedding-gold/40" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default InvitationMessage;
