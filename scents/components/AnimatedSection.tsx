"use client";

import { motion, useInView, Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string; 
}

const AnimatedSection = ({ children, className = "" }: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);

  const variants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="hidden"
      variants={variants}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;