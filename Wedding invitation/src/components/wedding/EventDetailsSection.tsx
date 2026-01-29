import { MapPin } from "lucide-react";
import DecorativeFrame from "./DecorativeFrame";
import VintageDivider from "./VintageDivider";

const scheduleItems = [
  {
    time: "4:00 PM",
    event: "Ceremony",
    description: "Join us as we say 'I do'",
    icon: "💒"
  },
  {
    time: "5:00 PM",
    event: "Cocktail Hour",
    description: "Drinks and appetizers in the garden",
    icon: "🥂"
  },
  {
    time: "6:30 PM",
    event: "Dinner Reception",
    description: "A feast to celebrate our love",
    icon: "🍽"
  },
  {
    time: "8:30 PM",
    event: "Dancing & Celebration",
    description: "Let's dance the night away!",
    icon: "💃"
  }
];

const EventDetailsSection = () => {
  return (
    <section className="py-20 px-4 bg-warm-gradient">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary text-2xl">✦</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 mb-2">
            Event Details
          </h2>
          <p className="text-muted-foreground italic">
            Everything you need to know
          </p>
          <VintageDivider />
        </div>
        
        {/* Venue Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Ceremony Venue */}
          <DecorativeFrame className="bg-card text-center">
            <div className="text-secondary text-3xl mb-4">⛪</div>
            <h3 className="font-serif text-2xl text-primary mb-2">Ceremony</h3>
            <p className="font-semibold text-foreground mb-1">
              Rose Garden Chapel
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              123 Garden Lane, Countryside, CA 90210
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <MapPin className="w-4 h-4" />
              <a href="#" className="underline hover:no-underline text-sm">
                View on Map
              </a>
            </div>
          </DecorativeFrame>
          
          {/* Reception Venue */}
          <DecorativeFrame className="bg-card text-center">
            <div className="text-secondary text-3xl mb-4">🏰</div>
            <h3 className="font-serif text-2xl text-primary mb-2">Reception</h3>
            <p className="font-semibold text-foreground mb-1">
              Willow Estate Ballroom
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              456 Estate Drive, Countryside, CA 90210
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <MapPin className="w-4 h-4" />
              <a href="#" className="underline hover:no-underline text-sm">
                View on Map
              </a>
            </div>
          </DecorativeFrame>
        </div>
        
        {/* Day Schedule */}
        <DecorativeFrame className="bg-card">
          <h3 className="font-serif text-2xl text-primary text-center mb-8">
            Day Schedule
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scheduleItems.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-secondary font-bold text-lg mb-1">{item.time}</p>
                <h4 className="font-serif text-lg text-primary mb-1">{item.event}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </DecorativeFrame>
        
        {/* Dress Code */}
        <div className="mt-12 text-center">
          <DecorativeFrame className="bg-card/50 inline-block" withCorners={false}>
            <div className="flex items-center gap-4">
              <span className="text-2xl">👔</span>
              <div>
                <h4 className="font-serif text-lg text-primary">Dress Code</h4>
                <p className="text-muted-foreground">Garden Formal / Cocktail Attire</p>
              </div>
              <span className="text-2xl">👗</span>
            </div>
          </DecorativeFrame>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
