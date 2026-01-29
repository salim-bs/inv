import DecorativeFrame from "./DecorativeFrame";
import VintageDivider from "./VintageDivider";

const storyMilestones = [
  {
    year: "2018",
    title: "First Meeting",
    description: "We met at a mutual friend's summer barbecue. James spilled lemonade on Emma's dress, and the rest is history.",
    icon: "☀"
  },
  {
    year: "2019",
    title: "First Date",
    description: "A picnic in the park turned into a six-hour conversation about everything and nothing.",
    icon: "🌸"
  },
  {
    year: "2021",
    title: "Moving In Together",
    description: "We took the leap and got our first apartment together, complete with a tiny balcony garden.",
    icon: "🏡"
  },
  {
    year: "2024",
    title: "The Proposal",
    description: "James proposed at sunset on the same beach where we had our first vacation together.",
    icon: "💍"
  }
];

const OurStorySection = () => {
  return (
    <section className="py-20 px-4 bg-peach-gradient">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary text-2xl">✦</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 mb-2">
            Our Story
          </h2>
          <p className="text-muted-foreground italic">
            A love story written in the stars
          </p>
          <VintageDivider />
        </div>
        
        {/* Story Timeline */}
        <div className="space-y-8">
          {storyMilestones.map((milestone, index) => (
            <DecorativeFrame 
              key={milestone.year}
              className="bg-card"
              withCorners={index === 0 || index === storyMilestones.length - 1}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Year Badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex flex-col items-center justify-center border-2 border-primary/20">
                    <span className="text-2xl">{milestone.icon}</span>
                    <span className="text-xs text-primary font-semibold">{milestone.year}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-primary mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </DecorativeFrame>
          ))}
        </div>
        
        {/* Closing Quote */}
        <div className="text-center mt-16">
          <blockquote className="font-serif text-2xl md:text-3xl text-primary italic">
            "And so, our greatest adventure begins..."
          </blockquote>
          <div className="text-secondary text-2xl mt-4">❦</div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
