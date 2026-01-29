import React, { useEffect, useState } from 'react';
import './Envelope.css';

interface EnvelopeProps {
    isOpen: boolean;
    onClick: () => void;
    groomInitial?: string;
    brideInitial?: string;
    groomName?: string;
    brideName?: string;
    date?: string;
}

const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onClick, groomName = "Sophia", brideName = "Alexander", date = "September 12, 2026" }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Sequence: Open Flap -> Pull Letter -> (Parent triggers content show)

            // We adding the zoom effect after a slight delay to match the "pull out" timing
            const timerZoom = setTimeout(() => {
                setIsZoomed(true);
            }, 2000); // Wait for letter to pull out (matches CSS transition + delay)

            const timerFinish = setTimeout(() => {
                setIsFinished(true);
            }, 2800);

            return () => {
                clearTimeout(timerZoom);
                clearTimeout(timerFinish);
            };
        }
    }, [isOpen]);

    if (isFinished) {
        return null; // Or keep it hidden via CSS if you prefer
    }

    return (
        <div className={`envelope-container ${isOpen ? 'open' : ''} ${isZoomed ? 'zoomed' : ''} ${isFinished ? 'finished' : ''}`} id="envelope-container">
            <div className="envelope-wrapper">
                <div className="envelope" id="envelope">
                    <div className="flap top-flap"></div>
                    <div className="flap right-flap"></div>
                    <div className="flap bottom-flap"></div>
                    <div className="flap left-flap"></div>
                    <div className="letter-preview">
                        <p className="envelope-text">You are invited</p>
                    </div>
                    <div className="wax-seal" id="open-btn" onClick={onClick}>
                        <span>Open</span>
                    </div>
                </div>
                <div className="letter" id="letter">
                    <div className="letter-content">
                        <h1 className="couple-names-intro">{groomName} & {brideName}</h1>
                        <p className="date-intro">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Envelope;
