import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RadiusOnScroll from "./RadiusOnScroll";
import dashboardImg from '@assets/generated_images/GPS_tracking_dashboard_interface_29624108.png';

export default function HeroSection() {
  return (
    <RadiusOnScroll imageSrc={dashboardImg} alt="GPS Tracking Dashboard">
      <div className="text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6" data-testid="text-hero-title">
          Secure Your Fleet,
          <br />
          Anytime, Anywhere
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          Real-time GPS tracking with instant theft alerts. Protect your vehicles with Phoenix Secure's advanced tracking technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full"
            data-testid="button-try-demo"
          >
            Try Live Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-full bg-white/10 backdrop-blur-md border-2 border-primary text-white hover:bg-white/20"
            data-testid="button-talk-sales"
          >
            Talk to Sales
          </Button>
        </div>
      </div>
    </RadiusOnScroll>
  );
}
