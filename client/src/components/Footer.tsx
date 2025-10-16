import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "About Us", href: "#" },
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "Become a Dealer", href: "#" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-bold text-primary mb-4">
              Phoenix Secure
            </h3>
            <p className="text-background/80 mb-6 max-w-md">
              India's leading GPS tracking solution for vehicle security and fleet management. Real-time tracking, instant theft alerts, and comprehensive fleet monitoring.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5 text-background" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5 text-background" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5 text-background" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-primary mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@phoenixsecure.in" className="text-background/80 hover:text-background transition-colors">
                  info@phoenixsecure.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+911234567890" className="text-background/80 hover:text-background transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/80">
                  New Delhi, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © {new Date().getFullYear()} Phoenix Secure. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
