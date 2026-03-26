"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

const directionVariants = {
  up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }: Props) => {
  const variants = directionVariants[direction];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: variants.hidden,
        visible: { ...variants.visible, transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
