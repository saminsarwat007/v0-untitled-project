"use client"

import { motion } from "framer-motion"

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated terracotta pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-full bg-[url('/images/terracotta-texture.png')] bg-repeat opacity-30" />
      </div>

      {/* Animated wind lines  bg-repeat opacity-30" />
      </div>

      {/* Animated wind lines */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-teal-600/30"
            style={{
              top: `${10 + i * 8}%`,
              left: 0,
              right: 0,
              scaleX: 1,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-teal-500/30"
          style={{
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() > 0.5 ? 20 : -20, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-amber-500/10" />
    </div>
  )
}
