import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface RadiusOnScrollProps {
  children: React.ReactNode;
  imageSrc: string;
  alt?: string;
}

export default function RadiusOnScroll({ children, imageSrc, alt = "Hero image" }: RadiusOnScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Transform scroll position to border radius (0px -> 24px)
  const borderRadius = useTransform(scrollY, [0, 400], [0, 24]);
  
  // Transform scroll position to padding (0px -> 32px)
  const padding = useTransform(scrollY, [0, 400], [0, 32]);

  // Transform scroll position to scale
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen" data-testid="radius-on-scroll">
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{
          borderRadius,
          padding,
          scale,
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
