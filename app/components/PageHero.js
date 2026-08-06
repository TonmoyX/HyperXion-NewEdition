"use client";

import { motion } from "framer-motion";
import { Chip } from "@heroui/react";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  compact = false,
  // Vertical anchor of the background image, as a percentage (0 = top edge,
  // 50 = center, 100 = bottom edge) — pass this like a Tailwind spacing
  // token (e.g. imagePositionY={20}) to nudge which part of a tall photo
  // stays in frame. Defaults to 0 (top-anchored).
  imagePositionY = 12.5,
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden px-4 text-center ${
        compact ? "py-16 md:py-20" : "py-20 md:py-45"
      }`}
      style={
        image
          ? {
              backgroundImage: `linear-gradient(180deg, rgba(10,12,20,0.55), rgba(10,12,20,0.50)), url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: `center ${imagePositionY}%`,
            }
          : undefined
      }
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Chip color="accent" variant="soft" size="sm" className="mb-4">
            {eyebrow}
          </Chip>
        </motion.div>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white md:text-6xl"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-4 max-w-2xl text-base text-white/80 md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
