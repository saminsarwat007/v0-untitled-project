"use client"

import { motion } from "framer-motion"

export default function ProblemBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Heat waves */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`heat-${i}`}
          className="absolute w-full h-16 bg-gradient-to-r from-amber-500/10 via-amber-600/20 to-amber-500/10"
          style={{ top: `${15 + i * 20}%` }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Heat particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-3 h-3 rounded-full bg-amber-500/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}
