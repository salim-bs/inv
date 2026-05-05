import React, { useEffect, useRef, useState } from 'react';
import envelopeVideo from '@/Video/envelope_opening.mp4';

interface EnvelopeProps {
    isOpen: boolean;
    onClick: () => void;
    onTransition: () => void;
    groomInitial?: string;
    brideInitial?: string;
    groomName?: string;
    brideName?: string;
    date?: string;
}

const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onClick, onTransition, groomName, brideName, date }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasTransitioned, setHasTransitioned] = useState(false);

    useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Video play failed:", error);
            });
        }
    }, [isOpen]);

    const handleTimeUpdate = () => {
        if (videoRef.current && !hasTransitioned) {
            const timeLeft = videoRef.current.duration - videoRef.current.currentTime;
            // Trigger transition 1 second before end
            if (timeLeft <= 1.0) {
                setHasTransitioned(true);
                onTransition();
            }
        }
    };

    const handlePlayAndOpen = () => {
        if (videoRef.current) {
            // Play immediately on user interaction to satisfy strict mobile browsers
            videoRef.current.play().catch(error => {
                console.error("Video play failed:", error);
            });
        }
        onClick();
    };

    return (
        <div className="fixed inset-0 bg-wedding-charcoal z-50 flex items-center justify-center cursor-pointer" onClick={handlePlayAndOpen}>
            <video
                ref={videoRef}
                src={`${envelopeVideo}#t=0.001`}
                className="w-full h-full object-cover"
                playsInline
                // @ts-ignore - specific webkit attribute for broader compatibility
                webkit-playsinline="true"
                x5-playsinline="true"
                preload="auto"
                muted
                onTimeUpdate={handleTimeUpdate}
            />
            
            {/* Elegant Fallback/Overlay before opening */}
            {!isOpen && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-wedding-charcoal/90 backdrop-blur-sm pointer-events-none transition-opacity duration-1000">
                    <div className="max-w-md px-6 text-center">
                        <h1 className="font-script text-5xl md:text-7xl text-wedding-gold mb-6 drop-shadow-lg">
                            {groomName} <span className="text-wedding-cream">&</span> {brideName}
                        </h1>
                        <p className="font-elegant text-lg md:text-xl text-wedding-cream/80 tracking-[0.2em] uppercase mb-16">
                            {date}
                        </p>
                        
                        <div className="flex flex-col items-center animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-wedding-gold mb-4">
                                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/>
                                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/>
                            </svg>
                            <p className="font-sans text-xs md:text-sm text-wedding-gold tracking-[0.3em] uppercase">
                                Tap to Open
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Envelope;
