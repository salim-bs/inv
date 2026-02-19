import VintageDivider from "./VintageDivider";

const FooterSection = () => {
  return (
    <footer className="py-20 px-4 bg-wedding-charcoal text-wedding-cream">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center gap-6">

        {/* Heart Icon */}
        <div className="text-wedding-gold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 opacity-80"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>

        {/* Names */}
        <h2 className="font-script text-5xl md:text-6xl text-wedding-cream tracking-wide">
          Asma & Khalil
        </h2>

        {/* Date */}
        <p className="font-elegant text-xl md:text-2xl text-wedding-cream/80 tracking-widest uppercase">
          August 20, 2026
        </p>

      </div>
    </footer>
  );
};

export default FooterSection;
