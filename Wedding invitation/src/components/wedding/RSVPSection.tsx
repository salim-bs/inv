import { useState } from "react";
import { Check } from "lucide-react";
import DecorativeFrame from "./DecorativeFrame";
import VintageDivider from "./VintageDivider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "1",
    dietary: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, just show success state
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 px-4 bg-peach-gradient">
        <div className="max-w-2xl mx-auto">
          <DecorativeFrame className="bg-card shadow-vintage text-center">
            <div className="py-8">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-accent" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
                Thank You!
              </h2>
              <p className="text-foreground/80 text-lg mb-6">
                We're so excited to celebrate with you!
              </p>
              <div className="text-secondary text-3xl">✿</div>
            </div>
          </DecorativeFrame>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-peach-gradient">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary text-2xl">✦</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 mb-2">
            RSVP
          </h2>
          <p className="text-muted-foreground italic">
            Kindly respond by May 15, 2025
          </p>
          <VintageDivider />
        </div>
        
        <DecorativeFrame className="bg-card shadow-vintage">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background border-border focus:border-primary"
              />
            </div>
            
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background border-border focus:border-primary"
              />
            </div>
            
            {/* Attendance */}
            <div className="space-y-3">
              <Label className="text-foreground font-medium">
                Will you be attending? *
              </Label>
              <RadioGroup
                value={formData.attendance}
                onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="cursor-pointer">
                    Joyfully Accept
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="cursor-pointer">
                    Regretfully Decline
                  </Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* Number of Guests */}
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-foreground font-medium">
                Number of Guests
              </Label>
              <select
                id="guests"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>
            
            {/* Dietary Restrictions */}
            <div className="space-y-2">
              <Label htmlFor="dietary" className="text-foreground font-medium">
                Dietary Restrictions
              </Label>
              <Input
                id="dietary"
                type="text"
                placeholder="Vegetarian, allergies, etc."
                value={formData.dietary}
                onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                className="bg-background border-border focus:border-primary"
              />
            </div>
            
            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-medium">
                Message for the Couple
              </Label>
              <Textarea
                id="message"
                placeholder="Share your well wishes..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border focus:border-primary resize-none"
              />
            </div>
            
            {/* Submit Button */}
            <div className="text-center pt-4">
              <button type="submit" className="retro-button font-serif text-lg">
                Send RSVP
              </button>
            </div>
          </form>
        </DecorativeFrame>
      </div>
    </section>
  );
};

export default RSVPSection;
