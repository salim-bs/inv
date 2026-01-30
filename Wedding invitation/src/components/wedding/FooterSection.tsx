import VintageDivider from "./VintageDivider";

const FooterSection = () => {
  return (
    <footer className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        {/* Monogram */}
        <div className="mb-8">
          <div className="inline-block border-2 border-primary-foreground/30 rounded-full p-6">
            <span className="font-serif text-4xl md:text-5xl">
              A <span className="text-secondary">&</span> K
            </span>
          </div>
        </div>

        {/* Date */}
        <p className="font-serif text-2xl mb-2">August 20, 2026</p>
        <p className="text-primary-foreground/70 mb-8">El Haouaria, Tunisia</p>

        <VintageDivider
          icon={<span className="text-secondary">✦</span>}
          className="[&::before]:!bg-gradient-to-r [&::before]:!from-transparent [&::before]:!to-primary-foreground/30 [&::after]:!bg-gradient-to-l [&::after]:!from-transparent [&::after]:!to-primary-foreground/30"
        />

        {/* Hashtag */}
        <p className="font-serif text-xl text-secondary mb-6">
          #AsmaAndKhalilForever
        </p>

        {/* Contact */}
        <p className="text-primary-foreground/70 text-sm mb-2">
          Questions? Reach out to us at
        </p>
        <a
          href="mailto:wedding@asmaandkhalil.com"
          className="text-secondary hover:underline"
        >
          wedding@asmaandkhalil.com
        </a>

        {/* Footer decorative */}
        <div className="mt-12 text-3xl">
          <span className="text-secondary">✿</span>
          <span className="mx-4 text-primary-foreground/40">•</span>
          <span className="text-secondary">❦</span>
          <span className="mx-4 text-primary-foreground/40">•</span>
          <span className="text-secondary">✿</span>
        </div>

        <p className="text-primary-foreground/50 text-xs mt-8">
          Made with love for our special day
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
