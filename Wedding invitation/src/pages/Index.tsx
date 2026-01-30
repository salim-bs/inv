import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Envelope from "@/components/Envelope";
import MusicPlayer from "@/components/MusicPlayer";
import WeddingDetails from "@/components/WeddingDetails";
import InvitationMessage from "@/components/InvitationMessage";

// Existing components from the new template
import HeroSection from "@/components/wedding/HeroSection";
import OurStorySection from "@/components/wedding/OurStorySection";
import PhotoStrip from "@/components/wedding/PhotoStrip";

import FooterSection from "@/components/wedding/FooterSection";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isEnvelopeOpen) {
      setIsEnvelopeOpen(true);
      // Delay showing content interactions until envelope animation completes
      // 2800ms total transition matches the Envelope internal timers
      setTimeout(() => setShowContent(true), 2800);
    }
  };

  // Wedding data passed to components
  // Wedding data passed to components
  const weddingData = {
    groomName: "Asma",
    brideName: "Khalil",
    date: "August 20, 2026",
    time: "8:00 PM",
    venue: "The papyrus",
    venueAddress: "Route, ElKedoua,El Haouaria",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.536239783398!2d10.998811775698215!3d37.02085867218505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d39e2d3900193%3A0x565b6ea928dcf8ea!2sThe%20papyrus!5e0!3m2!1sfr!2stn!4v1769717388430!5m2!1sfr!2stn"
  };

  return (
    <main className="bg-wedding-cream min-h-screen font-serif text-wedding-charcoal overflow-hidden">
      <MusicPlayer autoPlayTrigger={isEnvelopeOpen} />

      <AnimatePresence mode="wait">
        {!showContent ? (
          <motion.div
            key="envelope"
            className="fixed inset-0 z-50"
            exit={{
              opacity: 0,
              transition: { duration: 1 }
            }}
          >
            <Envelope
              isOpen={isEnvelopeOpen}
              onClick={handleEnvelopeClick}
              groomInitial={weddingData.groomName.charAt(0)}
              brideInitial={weddingData.brideName.charAt(0)}
              groomName={weddingData.groomName}
              brideName={weddingData.brideName}
              date={weddingData.date}
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full"
          >
            {/* Main Single Page Content */}
            <HeroSection
              groomName={weddingData.groomName}
              brideName={weddingData.brideName}
              date={weddingData.date}
              time={weddingData.time}
            />

            <OurStorySection />

            <PhotoStrip />

            {/* Replaced EventDetailsSection with the requested WeddingDetails (Map) */}
            <WeddingDetails
              groomName={weddingData.groomName}
              brideName={weddingData.brideName}
              date={weddingData.date}
              time={weddingData.time}
              venue={weddingData.venue}
              venueAddress={weddingData.venueAddress}
              mapEmbedUrl={weddingData.mapEmbedUrl}
            />

            <InvitationMessage />



            <FooterSection />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 
          If you want the content to be visible BEHIND the envelope initially (blurry?), 
          you would render it always but with lower z-index.
          For now, matching the old behavior of fading in after open.
      */}
    </main>
  );
};

export default Index;
