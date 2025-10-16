import CardStack from "./CardStack";
import { Quote } from "lucide-react";

// todo: remove mock functionality
const testimonials = [
  {
    id: "1",
    quote: "My car was rescued without Police intervention within 20 minutes at 2.30 in the morning. Thanks to Phoenix Secure's Instant theft Alerts.",
    name: "Mr. Amit Chauhan",
    role: "Personal Car Owner, Noida",
  },
  {
    id: "2",
    quote: "Phoenix GPS has helped cut our Diesel bill by almost 20% and even our efficiency has increased because we know exact location of our fleet.",
    name: "Mr. Satendra Chauhan",
    role: "Fleet Owner, Gurgaon",
  },
  {
    id: "3",
    quote: "Now I am not afraid to park my car anywhere because I get SMS alerts on my phone. I don't need central locking in my car at all.",
    name: "Mr. Sunil Mittal",
    role: "Personal Car Owner, East Delhi",
  },
  {
    id: "4",
    quote: "With installation of GPS Tracker our Goods delivery speed has increased. Now our clients trust us more than our competition.",
    name: "Mr. Dilbag Singh",
    role: "Transporter, Bhahinda",
  },
  {
    id: "5",
    quote: "All parents can enquire the exact location of School bus via SMS & Online Platform, thanks to Phoenix the parents have gained confidence in School Transport.",
    name: "Transport Department",
    role: "G.D. Goenka School, Agra",
  },
];

const cards = testimonials.map((testimonial) => ({
  id: testimonial.id,
  content: (
    <div>
      <Quote className="w-10 h-10 text-primary/30 mb-4" />
      <p className="text-lg mb-6 text-foreground leading-relaxed" data-testid={`text-testimonial-${testimonial.id}`}>
        {testimonial.quote}
      </p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  ),
}));

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-background" id="testimonials" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real users
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <CardStack cards={cards} offset={12} scaleFactor={0.03} />
          <p className="text-center text-sm text-muted-foreground mt-8">
            Swipe or drag cards to see more testimonials
          </p>
        </div>
      </div>
    </section>
  );
}
