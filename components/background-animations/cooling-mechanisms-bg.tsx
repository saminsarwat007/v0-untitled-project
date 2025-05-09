"use client"

import { motion } from "framer-motion"

export default function CoolingMechanismsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Scientific grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Flowing air currents */}
      {[...Array(10)].map((_, i) => {
        const isHot = i % 2 === 0
        return (
          <motion.div
            key={`current-${i}`}
            className={`absolute h-0.5 ${isHot ? "bg-amber-500/15" : "bg-teal-500/15"}`}
            style={{
              width: `${50 + Math.random() * 150}px`,
              top: `${5 + i * 9}%`,
              left: isHot ? "-100px" : "auto",
              right: !isHot ? "-100px" : "auto",
            }}
            animate={{
              x: isHot ? ["0%", "100vw"] : ["0%", "-100vw"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 3,
            }}
          />
        )
      })}

      {/* Water molecules */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`molecule-${i}`}
          className="absolute flex items-center justify-center"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() > 0.5 ? 20 : -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          <div className="relative">
            <div className="absolute w-2 h-2 rounded-full bg-teal-500/20" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-teal-500/20" style={{ left: "4px", top: "-3px" }} />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-teal-500/20" style={{ left: "-4px", top: "-3px" }} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
