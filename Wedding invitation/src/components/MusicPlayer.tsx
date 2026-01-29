import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Use a royalty-free wedding compatible track
    // Source: https://pixabay.com/music/search/wedding/
    const musicUrl = "https://cdn.pixabay.com/audio/2022/03/09/audio_adb5269575.mp3";

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                // Play returns a promise that we should handle
                audioRef.current.play().catch(error => {
                    console.error("Audio playback failed:", error);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Attempt auto-play when component mounts (often blocked by browsers until interaction)
    // We'll rely on the user or the "Open Envelope" interaction to trigger this in the parent
    // But for this component, we expose the state

    useEffect(() => {
        // Optional: Fade in
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        }
    }, []);

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
