"use client";

import { motion } from "framer-motion";

export default function AnimationWrapper({
  children,
  type,
  variants,
  duration,
}: any) {
  if (!variants) {
    variants = {
      hidden: { opacity: 0, x: 0, y: -200 },
      enter: {
        opacity: 1,
        x: 0,
        y: 0,
      },
      exit: {
        opacity: 0,
        x: 0,
        y: -100,
        transition: {
          duration: 0.3,
        },
      },
    };
    if (duration)
      variants.enter.transition = {
        type: type || "spring",
        duration,
      };
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
