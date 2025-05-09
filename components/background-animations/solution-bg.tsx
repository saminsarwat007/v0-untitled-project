"use client"

import { motion } from "framer-motion"

export default function SolutionBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cool breeze waves */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`breeze-${i}`}
          className="absolute w-full h-16 bg-gradient-to-r from-teal-500/10 via-teal-600/15 to-teal-500/10"
          style={{ top: `${20 + i * 15}%` }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: i * 0.7,
          }}
        />
      ))}

      {/* Water droplets */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`droplet-${i}`}
          className="absolute w-2 h-4 rounded-b-full bg-teal-500/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10px`,
          }}
          animate={{
            y: [0, window.innerHeight + 10],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 7 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 7,
          }}
        />
      ))}
    </div>
  )
}
