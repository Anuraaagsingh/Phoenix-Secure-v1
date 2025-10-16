import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, Wrench, Smartphone, Settings, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiGoogleplay, SiAppstore } from "react-icons/si";

const steps = [
  {
    id: 1,
    title: "Get the Device",
    description: "Purchase our GPS tracking device online or from authorized dealers",
    icon: ShoppingCart,
    action: "Purchase Now",
    actionLink: "#",
  },
  {
    id: 2,
    title: "Professional Installation",
    description: "Our trained professionals install the device in your vehicle",
    icon: Wrench,
    action: null,
  },
  {
    id: 3,
    title: "Install the App",
    description: "Download Phoenix Secure app from Play Store or App Store",
    icon: Smartphone,
    action: "Download App",
    actionLink: "#",
    apps: true,
  },
  {
    id: 4,
    title: "Initial Setup",
    description: "Complete the simple setup process in the mobile app",
    icon: Settings,
    action: null,
  },
  {
    id: 5,
    title: "Track Successfully",
    description: "Enjoy live location tracking and vehicle security",
    icon: MapPin,
    action: null,
  },
];

export default function InstallationSteps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden" data-testid="section-installation">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Easy Installation Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with Phoenix Secure in just 5 simple steps
          </p>
        </div>

        {/* Desktop: Horizontal Progress */}
        <div className="hidden lg:block">
          <div className="relative mb-20">
            {/* Progress Line Background */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-muted z-0" />
            
            {/* Progress Line Foreground */}
            <motion.div
              className="absolute top-8 left-0 h-1 bg-primary z-0"
              style={{ width: progressWidth }}
            />

            {/* Steps */}
            <div className="relative z-10 flex justify-between">
              {steps.map((step, index) => {
                const stepProgress = index / (steps.length - 1);
                const isActive = useTransform(
                  scrollYProgress,
                  (progress) => progress >= stepProgress
                );
                const shouldScale = useTransform(
                  scrollYProgress,
                  (progress) => progress >= stepProgress ? 1 : 0.9
                );

                return (
                  <div
                    key={step.id}
                    className="flex flex-col items-center w-48"
                    data-testid={`step-${step.id}`}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors"
                      style={{
                        scale: shouldScale,
                        backgroundColor: useTransform(
                          isActive,
                          (active) => active ? "hsl(var(--primary))" : "hsl(var(--card))"
                        ),
                        color: useTransform(
                          isActive,
                          (active) => active ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))"
                        ),
                        borderWidth: useTransform(
                          isActive,
                          (active) => active ? "0px" : "2px"
                        ),
                        borderColor: "hsl(var(--border))",
                        borderStyle: "solid",
                      }}
                    >
                      <step.icon className="w-8 h-8" />
                    </motion.div>

                    <div className="text-center">
                      <h3 className="font-display font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {step.description}
                      </p>

                      {step.action && !step.apps && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                          data-testid={`button-${step.id}`}
                        >
                          {step.action}
                        </Button>
                      )}

                      {step.apps && (
                        <div className="flex gap-2 justify-center">
                          <a
                            href="#"
                            className="flex items-center gap-1 px-3 py-2 rounded-full bg-card border border-border hover-elevate text-sm"
                            data-testid="link-playstore"
                          >
                            <SiGoogleplay className="w-4 h-4" />
                            Play Store
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-1 px-3 py-2 rounded-full bg-card border border-border hover-elevate text-sm"
                            data-testid="link-appstore"
                          >
                            <SiAppstore className="w-4 h-4" />
                            App Store
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Progress */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line Background */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-muted z-0" />
            
            {/* Vertical Line Foreground */}
            <motion.div
              className="absolute left-8 top-0 w-1 bg-primary z-0"
              style={{ height: progressHeight }}
            />

            {/* Steps */}
            <div className="space-y-8 relative z-10">
              {steps.map((step, index) => {
                const stepProgress = index / (steps.length - 1);
                const isActive = useTransform(
                  scrollYProgress,
                  (progress) => progress >= stepProgress
                );
                const shouldScale = useTransform(
                  scrollYProgress,
                  (progress) => progress >= stepProgress ? 1 : 0.9
                );

                return (
                  <div key={step.id} className="flex gap-6">
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{
                        scale: shouldScale,
                        backgroundColor: useTransform(
                          isActive,
                          (active) => active ? "hsl(var(--primary))" : "hsl(var(--card))"
                        ),
                        color: useTransform(
                          isActive,
                          (active) => active ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))"
                        ),
                        borderWidth: useTransform(
                          isActive,
                          (active) => active ? "0px" : "2px"
                        ),
                        borderColor: "hsl(var(--border))",
                        borderStyle: "solid",
                      }}
                    >
                      <step.icon className="w-8 h-8" />
                    </motion.div>

                    <div className="flex-1 pt-2">
                      <h3 className="font-display font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {step.description}
                      </p>

                      {step.action && !step.apps && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                        >
                          {step.action}
                        </Button>
                      )}

                      {step.apps && (
                        <div className="flex flex-wrap gap-2">
                          <a
                            href="#"
                            className="flex items-center gap-1 px-3 py-2 rounded-full bg-card border border-border hover-elevate text-sm"
                          >
                            <SiGoogleplay className="w-4 h-4" />
                            Play Store
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-1 px-3 py-2 rounded-full bg-card border border-border hover-elevate text-sm"
                          >
                            <SiAppstore className="w-4 h-4" />
                            App Store
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
