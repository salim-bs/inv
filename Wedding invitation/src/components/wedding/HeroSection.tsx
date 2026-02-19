import heroCouple from "@/assets/hero-couple.jpg";
import VintageDivider from "./VintageDivider";
import CountdownTimer from "./CountdownTimer";

interface HeroSectionProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  time?: string;
}

const HeroSection = ({
  groomName = "Emma",
  brideName = "James",
  date = "June 15, 2025",
  time = "at four o'clock in the afternoon"
}: HeroSectionProps) => { // Updated default date for countdown logic below if needed, but props take precedence

  // Parse the date string "August 20, 2026" or similar to a Date object for the timer
  // For simplicity, hardcoding the target date based on user request for the countdown
  const TARGET_DATE = new Date("2026-08-20T16:00:00");

  return (
    <section className="min-h-[100dvh] flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background Photo */}
      <div className="absolute inset-0 bg-wedding-charcoal">
        <img
          src={heroCouple}
          alt="Couple"
          className="w-full h-full object-contain md:object-cover object-center"
        />
      </div>

      {/* Darker Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-5xl w-full relative z-10 text-center flex flex-col items-center justify-center h-full min-h-[80vh]">

        {/* Intro */}
        <p className="uppercase tracking-[0.4em] text-white/90 text-sm md:text-base font-sans font-light mb-8 animate-fade-in delay-200">
          Together with their families
        </p>

        {/* Names */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 mb-8 animate-fade-up delay-300">
          <h1 className="font-script text-[3.5rem] leading-tight md:text-9xl text-white drop-shadow-lg text-center">
            {groomName}
          </h1>
          <span className="font-script text-3xl md:text-6xl text-wedding-gold opacity-90 my-2 md:my-0">
            &
          </span>
          <h1 className="font-script text-[3.5rem] leading-tight md:text-9xl text-white drop-shadow-lg text-center">
            {brideName}
          </h1>
        </div>

        {/* Date & Location */}
        <div className="space-y-4 animate-fade-up delay-500">
          <p className="font-elegant text-2xl md:text-4xl text-white tracking-widest uppercase border-y border-white/30 py-4 px-8 inline-block backdrop-blur-sm">
            {date}
          </p>
          <p className="font-sans text-white/80 tracking-wider text-sm md:text-lg uppercase mt-4">
            El Haouaria, Tunisia
          </p>
        </div>

        {/* Countdown Timer (Optional - kept if desired, styled minimally) */}
        <div className="mt-16 opacity-90 hover:opacity-100 transition-opacity">
          {/* Passing transparent/white theme props if supported, or wrapped in a white-text context */}
          <div className="text-white">
            <CountdownTimer targetDate={TARGET_DATE} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
