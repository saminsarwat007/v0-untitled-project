"use client"

import { motion } from "framer-motion"

export default function ClimateBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Leaf particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`leaf-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, Math.random() > 0.5 ? 50 : -50, 0],
            rotate: [0, Math.random() * 360, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z"
              fill="#0d9488"
              fillOpacity="0.1"
            />
          </svg>
        </motion.div>
      ))}

      {/* CO2 molecules */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`co2-${i}`}
          className="absolute text-teal-600/10 text-xs font-mono"
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
            duration: 10 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          CO₂
        </motion.div>
      ))}

      {/* Earth grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-[1px] border-teal-600/20"
          style={{ width: "80%", height: "80%", margin: "auto" }}
        />
        {[...Array(6)].map((_, i) => (
          <div
            key={`grid-${i}`}
            className="absolute top-0 left-0 right-0 bottom-0 border-[0.5px] border-teal-600/10"
            style={{
              width: "80%",
              height: "80%",
              margin: "auto",
              transform: `rotate(${i * 30}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
