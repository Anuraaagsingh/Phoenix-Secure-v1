import { useState } from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";

interface Card {
  id: string;
  content: React.ReactNode;
}

interface CardStackProps {
  cards: Card[];
  offset?: number;
  scaleFactor?: number;
}

export default function CardStack({
  cards,
  offset = 10,
  scaleFactor = 0.05,
}: CardStackProps) {
  const [currentCards, setCurrentCards] = useState(cards);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500) {
      // Move the top card to the back
      setCurrentCards((prev) => {
        const newCards = [...prev];
        const topCard = newCards.shift();
        if (topCard) {
          newCards.push(topCard);
        }
        return newCards;
      });
    }
  };

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center" data-testid="card-stack">
      {currentCards.map((card, index) => {
        const canDrag = index === 0;
        const scale = 1 - index * scaleFactor;
        const y = index * offset;
        const opacity = 1 - index * 0.1;
        const zIndex = currentCards.length - index;

        return (
          <motion.div
            key={card.id}
            drag={canDrag ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={{
              scale,
              y,
              opacity,
              zIndex,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="absolute w-full max-w-md"
            style={{
              cursor: canDrag ? "grab" : "default",
            }}
            whileDrag={{ cursor: "grabbing", rotate: 0 }}
            data-testid={`card-stack-item-${index}`}
          >
            <div className="bg-card border border-card-border rounded-xl p-8 shadow-xl">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
