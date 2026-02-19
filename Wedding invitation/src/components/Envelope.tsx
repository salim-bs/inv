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

const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onClick, onTransition }) => {
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
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <video
                ref={videoRef}
                src={envelopeVideo}
                className="w-full h-full object-cover"
                playsInline
                // @ts-ignore - specific webkit attribute for broader compatibility
                webkit-playsinline="true"
                x5-playsinline="true"
                preload="auto"
                muted
                onClick={handlePlayAndOpen}
                onTimeUpdate={handleTimeUpdate}
            />
        </div>
    );
};

export default Envelope;
