"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function TerminalLine({
  text,
  className,
  delay = 0,
  cursor = false,
}) {
  return (
    <motion.span
      className={cn(cursor && "cursor", className)}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: delay } },
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
