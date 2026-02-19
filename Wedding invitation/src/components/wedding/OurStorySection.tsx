import { Heart, Gem, Church } from "lucide-react";

const storyMilestones = [
  {
    year: "2018",
    title: "First Meeting",
    description: "We met while hanging out with friends. A casual gathering turned into the beginning of our forever.",
    icon: <Heart className="w-5 h-5 text-wedding-gold" fill="currentColor" />
  },
  {
    year: "2024",
    title: "The Proposal",
    description: "Khalil proposed in a moment of pure magic, asking the question that would change our lives forever.",
    icon: <Gem className="w-5 h-5 text-wedding-gold" />
  },
  {
    year: "2026",
    title: "The Wedding",
    description: "We invite you to join us as we say 'I do' and celebrate the start of our greatest adventure.",
    icon: <Church className="w-5 h-5 text-wedding-gold" />
  }
];

const OurStorySection = () => {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-wedding-gold text-sm tracking-[0.3em] uppercase block mb-4">
            How it began
          </span>
          <h2 className="font-script text-5xl md:text-6xl text-wedding-charcoal">
            Our Love Story
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col items-center space-y-12">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-wedding-gold/30 -translate-x-1/2" />

          {storyMilestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative flex items-center justify-between w-full max-w-4xl gap-4 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
            >
              {/* Content Box */}
              <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <span className="font-elegant text-2xl md:text-3xl text-wedding-gold block mb-2">
                  {milestone.year}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-wedding-charcoal mb-3">
                  {milestone.title}
                </h3>
                <p className="font-sans text-wedding-charcoal/70 leading-relaxed text-sm">
                  {milestone.description}
                </p>
              </div>

              {/* Icon Marker */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white border border-wedding-gold rounded-full shadow-sm">
                {milestone.icon}
              </div>

              {/* Empty Space to balance the Flex row */}
              <div className="flex-1" />
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="text-center mt-24">
          <p className="font-elegant text-2xl text-wedding-charcoal/60 italic">
            "And so, our greatest adventure begins..."
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurStorySection;
