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
        <div className="fixed bottom-4 right-4 z-50">
            <audio ref={audioRef} src={musicUrl} loop />
            <Button
                onClick={togglePlay}
                variant="outline"
                size="icon"
                className="rounded-full bg-white/80 backdrop-blur-sm border-wedding-sage text-wedding-sage hover:bg-wedding-sage hover:text-white shadow-lg transition-all duration-300"
            >
                {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>
        </div>
    );
};

export default MusicPlayer;

