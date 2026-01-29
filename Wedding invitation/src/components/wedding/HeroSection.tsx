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
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background Photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCouple})` }}
      />

      {/* Warm Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80" />

      <div className="max-w-4xl w-full relative z-10">
        <div className="bg-card/85 backdrop-blur-sm text-center p-8 md:p-12 lg:p-16 rounded-lg border border-primary/20">
          {/* Top decorative element */}
          <div className="text-secondary text-3xl mb-6">✿</div>

          {/* Announcement */}
          <p className="uppercase tracking-[0.3em] text-muted-foreground text-sm mb-8">
            Together with their families
          </p>

          {/* Couple Names */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary mb-4">
            {groomName}
          </h1>

          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px w-16 bg-secondary/50" />
            <span className="font-serif text-3xl text-secondary italic">&</span>
            <div className="h-px w-16 bg-secondary/50" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary mb-8">
            {brideName}
          </h1>

          <VintageDivider icon={<span className="text-secondary text-2xl">❦</span>} />

          {/* Invitation Text */}
          <p className="text-lg md:text-xl text-foreground/80 mb-6 font-medium">
            Request the pleasure of your company
            <br />
            at the celebration of their marriage
          </p>

          {/* Date */}
          <div className="bg-primary/10 rounded-lg py-6 px-8 inline-block">
            <p className="uppercase tracking-[0.2em] text-primary text-sm mb-2">
              Saturday
            </p>
            <p className="font-serif text-4xl md:text-5xl text-primary mb-2">
              {date}
            </p>
            <p className="text-muted-foreground">
              {time}
            </p>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer targetDate={TARGET_DATE} />

          {/* Bottom decorative element */}
          <div className="text-secondary text-3xl mt-8">✿</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
