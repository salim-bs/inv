import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
// Import the music file directly from src
import weddingSong from "../Music/Coldplay - Viva la Vida [Official Instrumental].mp3";

interface MusicPlayerProps {
    autoPlayTrigger?: boolean;
}

const MusicPlayer = ({ autoPlayTrigger = false }: MusicPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Use the imported file
    const musicUrl = weddingSong;

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(error => {
                    console.error("Audio playback failed:", error);
                    toast.error("Could not play music. Please ensure 'wedding-song.mp3' is in the public folder.");
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (autoPlayTrigger && audioRef.current && !isPlaying) {
            audioRef.current.volume = 0.5;
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.log("Auto-play prevented by browser policy or missing file:", error);
                });
            }
        }
    }, [autoPlayTrigger]);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <audio ref={audioRef} src={musicUrl} loop />
            <div className="relative group">
                {/* Pulse effect ring when playing */}
                {isPlaying && (
                    <div className="absolute inset-0 bg-wedding-gold/30 rounded-full animate-ping pointer-events-none" />
                )}

                <Button
                    onClick={togglePlay}
                    variant="outline"
                    className={`
                        rounded-full w-14 h-14 p-0 shadow-2xl transition-all duration-500
                        ${isPlaying
                            ? "bg-wedding-gold text-white border-wedding-gold hover:bg-wedding-gold/90"
                            : "bg-white/90 backdrop-blur-md text-wedding-charcoal border-wedding-sage/30 hover:border-wedding-gold hover:text-wedding-gold"
                        }
                    `}
                >
                    {isPlaying ? (
                        <Volume2 className="h-6 w-6 animate-pulse-slow" />
                    ) : (
                        <VolumeX className="h-6 w-6" />
                    )}
                </Button>

                {/* Optional Tooltip on Hover */}
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-wedding-charcoal text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-sans tracking-widest uppercase">
                    {isPlaying ? "Pause Music" : "Play Music"}
                </span>
            </div>
        </div>
    );
};

export default MusicPlayer;

