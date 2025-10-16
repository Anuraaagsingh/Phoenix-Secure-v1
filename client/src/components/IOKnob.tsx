import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface IOKnobProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function IOKnob({ isDark, onToggle }: IOKnobProps) {
  const [isPressed, setIsPressed] = useState(false);

  const playClickSound = () => {
    // Create a simple click sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const handleToggle = () => {
    setIsPressed(true);
    playClickSound();
    setTimeout(() => {
      onToggle();
      setIsPressed(false);
    }, 100);
  };

  return (
    <div className="relative" data-testid="io-knob">
      <motion.button
        onClick={handleToggle}
        className="relative w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center overflow-visible shadow-lg hover-elevate active-elevate-2"
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
        data-testid="button-theme-toggle"
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          animate={{
            borderColor: isDark ? "rgb(234, 179, 8)" : "rgb(250, 204, 21)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Rotating indicator */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div
            className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-3 rounded-full"
            style={{
              background: isDark ? "rgb(234, 179, 8)" : "rgb(250, 204, 21)",
            }}
          />
        </motion.div>

        {/* Icon */}
        <motion.div
          animate={{ rotate: isDark ? 360 : 0, scale: isPressed ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon className="w-6 h-6 text-primary" />
          ) : (
            <Sun className="w-6 h-6 text-primary" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
