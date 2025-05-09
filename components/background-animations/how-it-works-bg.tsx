"use client"

import { motion } from "framer-motion"

export default function HowItWorksBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
      </div>

      {/* Flowing air currents */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`flow-${i}`}
          className={`absolute h-1 ${i % 2 === 0 ? "bg-amber-500/30" : "bg-teal-500/30"}`}
          style={{
            width: `${100 + Math.random() * 200}px`,
            top: `${10 + i * 10}%`,
            left: i % 2 === 0 ? "-100px" : "auto",
            right: i % 2 === 1 ? "-100px" : "auto",
          }}
          animate={{
            x: i % 2 === 0 ? ["0%", "100vw"] : ["0%", "-100vw"],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Evaporation particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`evap-${i}`}
          className="absolute w-2 h-2 rounded-full bg-teal-500/40"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${70 + Math.random() * 20}%`,
          }}
          animate={{
            y: [0, -100 - Math.random() * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}
