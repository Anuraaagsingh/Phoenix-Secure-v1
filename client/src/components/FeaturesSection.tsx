import { motion } from "framer-motion";
import { MapPin, MessageSquare, Radio, Eye, Shield, Fuel } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your vehicles anywhere on the planet with precise GPS location updates every second.",
  },
  {
    icon: MessageSquare,
    title: "SMS Alerts on Theft",
    description: "Instant SMS notifications when unauthorized movement or suspicious activity is detected.",
  },
  {
    icon: Eye,
    title: "Single Screen Fleet View",
    description: "Monitor your entire fleet from one dashboard with live status updates and route history.",
  },
  {
    icon: Shield,
    title: "Remote Vehicle Immobilizer",
    description: "Stop your car remotely via SMS command to prevent theft and unauthorized use.",
  },
  {
    icon: Radio,
    title: "Voice Call Alerts",
    description: "Receive instant voice call notifications for critical security events and emergencies.",
  },
  {
    icon: Fuel,
    title: "Fuel Monitoring",
    description: "Track fuel consumption and detect fuel theft with advanced monitoring sensors.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-background" id="features" data-testid="section-features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="text-features-title">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced GPS tracking technology designed to keep your vehicles secure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-card-border rounded-xl p-8 h-full hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
