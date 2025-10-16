import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 bg-muted/30" data-testid="section-cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Live Demo CTA */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 lg:p-12 hover-elevate">
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              Try Our Live Demo
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Experience real-time GPS tracking with our interactive demo. See how Phoenix Secure can protect your vehicles.
            </p>
            <Button size="lg" className="rounded-full" data-testid="button-live-demo">
              Launch Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Dealer CTA */}
          <div className="bg-gradient-to-br from-foreground/5 to-foreground/[0.02] border border-border rounded-2xl p-8 lg:p-12 hover-elevate">
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              Become a Dealer
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join our network of authorized dealers and distributors. Grow your business with India's leading GPS tracking solution.
            </p>
            <Button size="lg" variant="outline" className="rounded-full" data-testid="button-dealer-inquiry">
              <Users className="mr-2 w-5 h-5" />
              Dealer Inquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
