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
          <span className="text-wedding-sage text-sm tracking-[0.3em] uppercase block mb-4">
            How it began
          </span>
          <h2 className="font-script text-5xl md:text-6xl text-wedding-charcoal">
            Our Love Story
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-wedding-sage/20 ml-6 md:mx-auto md:border-l-0 md:flex md:flex-col md:items-center space-y-12 md:space-y-0">

          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wedding-sage/20 -translate-x-1/2" />

          {storyMilestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative flex items-start md:items-center md:justify-between w-full md:w-[800px] ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Icon Marker */}
              <div className="absolute left-[-25px] md:static md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-white border border-wedding-sage/30 rounded-full z-10 shadow-sm">
                {milestone.icon}
              </div>

              {/* Content Box */}
              <div className={`pl-8 md:pl-0 md:w-[350px] ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                }`}>
                <span className="font-elegant text-3xl text-wedding-gold block mb-2">
                  {milestone.year}
                </span>
                <h3 className="font-serif text-2xl text-wedding-charcoal mb-3">
                  {milestone.title}
                </h3>
                <p className="font-sans text-wedding-charcoal/70 leading-relaxed text-sm">
                  {milestone.description}
                </p>
              </div>

              {/* Empty Space for opposite side on Desktop */}
              <div className="hidden md:block md:w-[350px]" />
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
