import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Truck, Bus, Bike } from "lucide-react";
import carImg from '@assets/generated_images/Car_dashboard_with_GPS_d8c010ce.png';
import truckImg from '@assets/generated_images/Truck_fleet_convoy_ba347aff.png';
import busImg from '@assets/generated_images/School_bus_transportation_46a056a3.png';
import bikeImg from '@assets/generated_images/Motorcycle_with_GPS_tracker_77953c29.png';

const useCases = [
  {
    id: "personal",
    icon: Car,
    title: "Personal Vehicles",
    image: carImg,
    benefits: [
      "Eliminate unauthorized vehicle use",
      "Real-time location tracking",
      "Instant theft alerts via SMS",
      "Peace of mind parking anywhere",
      "Quick emergency response",
    ],
  },
  {
    id: "fleet",
    icon: Truck,
    title: "Fleet Management",
    image: truckImg,
    benefits: [
      "20% reduction in fuel costs",
      "Route optimization and efficiency",
      "Driver behavior monitoring",
      "Maintenance scheduling alerts",
      "Improved delivery timelines",
    ],
  },
  {
    id: "school",
    icon: Bus,
    title: "School Transport",
    image: busImg,
    benefits: [
      "Parent SMS location updates",
      "Student safety monitoring",
      "Real-time bus tracking",
      "Route adherence verification",
      "Emergency alert system",
    ],
  },
  {
    id: "motorcycle",
    icon: Bike,
    title: "Motorcycles",
    image: bikeImg,
    benefits: [
      "Compact GPS tracker design",
      "Theft prevention alerts",
      "Location recovery support",
      "Weather-resistant hardware",
      "Long battery life",
    ],
  },
];

export default function BenefitsSection() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const activeUseCase = useCases.find((uc) => uc.id === activeTab) || useCases[0];

  return (
    <section className="py-24 bg-muted/30" id="benefits" data-testid="section-benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Benefits by Use Case
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions for every vehicle type
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(useCase.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === useCase.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover-elevate border border-border"
              }`}
              data-testid={`button-tab-${useCase.id}`}
            >
              <useCase.icon className="w-5 h-5" />
              {useCase.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h3 className="font-display text-3xl font-bold text-foreground mb-6">
                {activeUseCase.title}
              </h3>
              <ul className="space-y-4">
                {activeUseCase.benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                    data-testid={`text-benefit-${index}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-lg text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={activeUseCase.image}
                  alt={activeUseCase.title}
                  className="w-full h-auto"
                  data-testid="img-benefit-showcase"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
