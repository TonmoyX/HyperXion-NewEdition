"use client";

import { motion } from "framer-motion";

// Deterministic PRNG so the star field is identical between server and
// client renders (avoids hydration mismatches from Math.random()).
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateStarField(count, width, height, seed, color) {
  const rand = mulberry32(seed);
  const dots = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(rand() * width);
    const y = Math.floor(rand() * height);
    dots.push(`${x}px ${y}px ${color}`);
  }
  return dots.join(", ");
}

const FIELD_W = 2200;
const FIELD_H = 1600;

// Parallax depth: far stars are small, dim, and drift slowly; near stars
// are bigger, brighter, and streak past quickly — the combination reads as
// forward motion through a starfield, like cruising through deep space.
const STAR_LAYERS = [
  {
    size: 1,
    opacity: 0.55,
    duration: 340,
    breathe: 8,
    boxShadow: generateStarField(140, FIELD_W, FIELD_H, 7, "#cfe6ff"),
  },
  {
    size: 1.5,
    opacity: 0.75,
    duration: 190,
    breathe: 6,
    boxShadow: generateStarField(90, FIELD_W, FIELD_H, 21, "#ffffff"),
  },
  {
    size: 2.5,
    opacity: 0.9,
    duration: 90,
    breathe: 4,
    boxShadow: generateStarField(40, FIELD_W, FIELD_H, 42, "#9fd9ff"),
  },
];

const SHOOTING_STARS = [
  { top: "12%", left: "15%", delay: 0, repeatDelay: 14, rotate: 18 },
  { top: "28%", left: "70%", delay: 5, repeatDelay: 19, rotate: 24 },
  { top: "55%", left: "35%", delay: 10, repeatDelay: 22, rotate: 14 },
];

export default function SpaceBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--background)]"
    >
      {/* Deep nebula color wash */}
      <motion.div
        className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, oklch(62% 0.20 255) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 70, 0], y: [0, 45, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full opacity-30 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, oklch(60% 0.18 200) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 45, 0], y: [0, -55, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 h-[24rem] w-[24rem] rounded-full opacity-25 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, oklch(55% 0.20 20) 0%, transparent 70%)",
        }}
        animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Parallax starfield: layers move at different speeds to simulate travel depth */}
      {STAR_LAYERS.map((layer, i) => (
        <motion.div
          key={i}
          className="absolute left-0 top-0"
          style={{
            width: layer.size,
            height: layer.size,
            borderRadius: "9999px",
            boxShadow: layer.boxShadow,
          }}
          animate={{
            y: [0, -FIELD_H],
            opacity: [layer.opacity * 0.6, layer.opacity, layer.opacity * 0.6],
          }}
          transition={{
            y: { duration: layer.duration, repeat: Infinity, ease: "linear" },
            opacity: {
              duration: layer.breathe,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* Occasional shooting stars for that "traveling through space" spark */}
      {SHOOTING_STARS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-24 rounded-full bg-gradient-to-r from-white via-white/70 to-transparent"
          style={{
            top: s.top,
            left: s.left,
            rotate: s.rotate,
            boxShadow: "0 0 6px 1px rgba(255,255,255,0.8)",
          }}
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: [0, 1, 0], x: [0, 260] }}
          transition={{
            duration: 1.1,
            ease: "easeIn",
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: s.repeatDelay,
          }}
        />
      ))}

      {/* Cinematic vignette for depth, like looking out into space through a viewport */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(2,4,10,0.55) 100%)",
        }}
      />
    </div>
  );
}
