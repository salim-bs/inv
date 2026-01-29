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
                    <svg width="60" height="60" viewBox="0 0 60 60" className="text-wedding-sage">
                        <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="0.5" fill="none" />
                        <path
                            d="M30 15 L30 45 M15 30 L45 30"
                            stroke="currentColor"
                            strokeWidth="0.5"
                        />
                        <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    </svg>
                </motion.div>

                {/* Message text */}
                <p className="font-elegant text-2xl md:text-3xl lg:text-4xl text-wedding-charcoal leading-relaxed italic">
                    "{message}"
                </p>

                {/* Bottom decoration */}
                <motion.div
                    className="mt-10 flex items-center justify-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="w-16 h-px bg-wedding-sage-light" />
                    <Heart className="w-4 h-4 text-wedding-sage fill-wedding-sage" />
                    <div className="w-16 h-px bg-wedding-sage-light" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default InvitationMessage;
